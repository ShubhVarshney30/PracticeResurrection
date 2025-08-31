'use client';

import { useState } from 'react';

export default function ATSChecker() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile || !jobDescription) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jobDescription', jobDescription);

    try {
      const response = await fetch('/api/ats-score', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setScore(data.score);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">ATS Score Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          required
        />
        <textarea
          placeholder="Paste job description here"
          className="mt-4 p-2 border rounded"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
        <button type="submit" disabled={loading} className="mt-4 p-2 border rounded">
          {loading ? 'Checking...' : 'Check ATS Score'}
        </button>
      </form>
      {score !== null && <p className="mt-4 text-lg font-bold">Your ATS score: {score}%</p>}
      {error && <p className="mt-4 text-lg font-bold">Error: {error}</p>}
    </div>
  );
}