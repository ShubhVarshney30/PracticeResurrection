"use client"

import { useMemo, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"

import resumeData from "./data/resumeData.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import TemplateGallery from "@/components/TemplateGallery"
import ResumePreview from "@/components/ResumePre"

export default function Page() {
  const [selectedTemplate, setSelectedTemplate] = useState("template1")
  const [fontClass, setFontClass] = useState("font-sans")
  const previewRef = useRef<HTMLDivElement | null>(null)
  const { theme, setTheme } = useTheme()

  const templates = useMemo(
    () => [
      { id: "template1", name: "Modern Minimalist" },
      { id: "template2", name: "Corporate Professional" },
      { id: "template3", name: "Creative Design" },
    ],
    [],
  )

  // Custom print handler (no external deps)
  const handlePrint = () => {
    if (typeof window === "undefined") return
    const node = previewRef.current
    if (!node) return

    const printWindow = window.open("", "", "width=820,height=1100")
    if (!printWindow) return

    // Copy current styles (Tailwind/shadcn) to print window
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map((el) => el.outerHTML)
      .join("")

    const pageStyle = `
      @page { size: A4; margin: 16mm; }
      @media print {
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .no-print { display: none !important; }
      }
    `

    printWindow.document.write(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Resume</title>
  ${styles}
  <style>${pageStyle}</style>
</head>
<body class="${fontClass}">
  ${node.outerHTML}
</body>
</html>`)
    printWindow.document.close()
    printWindow.focus()
    printWindow.onload = () => {
      try {
        printWindow.print()
      } finally {
        printWindow.close()
      }
    }
  }

  return (
    <div className="min-h-dvh bg-background text-foreground mt-16">
      <header className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-balance">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary align-middle" />
            Resume Maker — Professional Templates
          </h1>
          <div className="flex items-center gap-2 no-print">
            <Select value={fontClass} onValueChange={setFontClass}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="font-sans">Sans</SelectItem>
                <SelectItem value="font-serif">Serif</SelectItem>
                <SelectItem value="font-mono">Mono</SelectItem>
              </SelectContent>
            </Select>

            {/* <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition-colors hover:bg-primary/5"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button> */}

            <Button onClick={handlePrint} className="transition-transform hover:-translate-y-0.5">
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-6 md:grid-cols-10">
          {/* Sidebar (30%) */}
          <aside className="md:col-span-3">
            <Card className="no-print transition-shadow hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">Template Gallery</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[70vh]">
                  <TemplateGallery
                    templates={templates}
                    selectedTemplate={selectedTemplate}
                    onSelect={setSelectedTemplate}
                    resume={resumeData as any}
                  />
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="mt-6 no-print transition-shadow hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">AI Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Coming soon: Get AI-powered suggestions to improve your resume content.
                </p>
                <Button disabled variant="outline" className="w-full bg-transparent">
                  Ask AI (placeholder)
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Area (70%) */}
          <section className="md:col-span-7">
            <Card className="transition-shadow hover:shadow-sm">
              <CardHeader className="no-print">
                <CardTitle className="text-base">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTemplate + fontClass}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ResumePreview
                      ref={previewRef}
                      resume={resumeData as any}
                      templateKey={selectedTemplate}
                      fontClass={fontClass}
                    />
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
