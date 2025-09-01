import { NextRequest, NextResponse } from 'next/server';

// Ensure this route runs on Node.js runtime and is never statically evaluated/prerendered
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// --- API Route Handler ---
export async function POST(req: NextRequest) {
  try {
    // Dynamically import Node-only heavy modules to avoid build-time evaluation
    const [pdfParseMod, mammothMod, naturalMod] = await Promise.all([
      import('pdf-parse'),
      import('mammoth'),
      import('natural'),
    ]);
    const pdfParse = pdfParseMod.default;
    const mammoth = mammothMod.default ?? mammothMod;
    const natural = naturalMod.default ?? naturalMod;

    // --- Helper Function for Text Processing ---
    function processText(text: string) {
      const tokenizer = new natural.WordTokenizer();
      const stemmer = natural.PorterStemmer;
      // Tokenize, convert to lowercase, and stem each word
      return tokenizer.tokenize(text.toLowerCase())?.map((token: string) => stemmer.stem(token)) || [];
    }

    // --- Helper Function for Cosine Similarity Calculation ---
    function calculateCosineSimilarity(doc1: string[], doc2: string[]) {
      const tfidf = new natural.TfIdf();
      tfidf.addDocument(doc1);
      tfidf.addDocument(doc2);

      const doc1Vector: { [key: string]: number } = {};
      const doc2Vector: { [key: string]: number } = {};

      // Create TF-IDF vectors for each document
      tfidf.listTerms(0).forEach((term: any) => {
        doc1Vector[term.term] = term.tfidf;
      });

      tfidf.listTerms(1).forEach((term: any) => {
        doc2Vector[term.term] = term.tfidf;
      });

      // Get a set of all unique terms across both documents
      const allTerms = new Set([...Object.keys(doc1Vector), ...Object.keys(doc2Vector)]);

      let dotProduct = 0;
      let magnitude1 = 0;
      let magnitude2 = 0;

      // Calculate dot product and magnitudes
      for (const term of allTerms) {
        const v1 = doc1Vector[term] || 0;
        const v2 = doc2Vector[term] || 0;
        dotProduct += v1 * v2;
        magnitude1 += v1 * v1;
        magnitude2 += v2 * v2;
      }

      magnitude1 = Math.sqrt(magnitude1);
      magnitude2 = Math.sqrt(magnitude2);

      if (magnitude1 === 0 || magnitude2 === 0) {
        return 0; // Avoid division by zero
      }

      const similarity = dotProduct / (magnitude1 * magnitude2);
      return similarity;
    }

    const formData = await req.formData();
    const resumeFile = formData.get('resume') as File | null;
    const jobDescription = formData.get('jobDescription') as string | null;

    if (!resumeFile || !jobDescription) {
      return NextResponse.json({ error: 'Missing resume file or job description' }, { status: 400 });
    }

    // --- Parse resume based on file type ---
    let resumeText = '';
    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    if (resumeFile.type === 'application/pdf') {
      const pdfData = await pdfParse(buffer);
      resumeText = pdfData.text;
    } else if (resumeFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const docxData = await mammoth.extractRawText({ buffer });
      resumeText = docxData.value;
    } else {
      return NextResponse.json({ error: 'Unsupported file type. Please upload a PDF or DOCX.' }, { status: 400 });
    }
    
    if (!resumeText.trim()) {
        return NextResponse.json({ error: 'Could not extract text from the resume.' }, { status: 400 });
    }

    // --- Process and Calculate Score ---
    const resumeTokens = processText(resumeText);
    const jobTokens = processText(jobDescription);

    const similarity = calculateCosineSimilarity(resumeTokens, jobTokens);
    
    // Normalize score to a percentage
    const score = Math.round(Math.min(Math.max(similarity * 100, 0), 100));

    return NextResponse.json({ score });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred on the server.' }, { status: 500 });
  }
}