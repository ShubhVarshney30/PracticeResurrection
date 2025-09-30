"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Brain, Target, Download, Github, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Import Your Data",
    description: "Connect your GitHub profile or manually enter your information including experience, skills, and education.",
    icon: <Github className="h-6 w-6" />,
    color: "#00D4FF",
    details: ["GitHub integration", "Manual data entry", "Auto-suggest from profile"]
  },
  {
    step: "02",
    title: "Choose Template",
    description: "Select from our collection of professional templates designed for different industries and career levels.",
    icon: <FileText className="h-6 w-6" />,
    color: "#9B5BFF",
    details: ["7+ professional templates", "ATS-optimized layouts", "Industry-specific designs"]
  },
  {
    step: "03",
    title: "AI Enhancement",
    description: "Get AI-powered suggestions to improve your content, keywords, and overall resume effectiveness.",
    icon: <Brain className="h-6 w-6" />,
    color: "#00FFA3",
    details: ["Smart keyword suggestions", "Content optimization", "Industry-specific tips"]
  },
  {
    step: "04",
    title: "Get ATS Score",
    description: "Analyze your resume with our ATS scoring system to ensure it passes automated screening.",
    icon: <Target className="h-6 w-6" />,
    color: "#FF6B6B",
    details: ["ATS compatibility check", "Improvement suggestions", "Score optimization"]
  },
  {
    step: "05",
    title: "Download & Apply",
    description: "Download your polished resume as PDF and start applying to your dream jobs with confidence.",
    icon: <Download className="h-6 w-6" />,
    color: "#FFD93D",
    details: ["High-quality PDF export", "Print-ready format", "Multiple format options"]
  }
]

export default function HowItWorks() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Create a professional resume in just 5 simple steps. Our guided process makes it easy to build a resume that stands out.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <Card className="w-full max-w-sm h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                    <div className="text-sm font-mono text-muted-foreground mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-primary/60" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group" asChild>
            <Link href="/builder">
              Start Building Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/ats-score">
              <Target className="w-4 h-4 mr-2" />
              Check ATS Score
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
