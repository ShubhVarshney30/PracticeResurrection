"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Sparkles, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

const templates = [
  {
    id: "template1",
    name: "Modern Minimalist",
    description: "Clean, contemporary design perfect for tech professionals",
    features: ["ATS-friendly", "Single page", "Modern typography"],
    icon: <FileText className="h-5 w-5" />,
    color: "#00D4FF"
  },
  {
    id: "template2",
    name: "Corporate Professional",
    description: "Traditional layout ideal for corporate and business roles",
    features: ["Two-column", "Executive style", "Professional colors"],
    icon: <Award className="h-5 w-5" />,
    color: "#9B5BFF"
  },
  {
    id: "template3",
    name: "Creative Design",
    description: "Stand out with creative elements and unique layouts",
    features: ["Visual elements", "Creative sections", "Unique styling"],
    icon: <Sparkles className="h-5 w-5" />,
    color: "#00FFA3"
  },
  {
    id: "template4",
    name: "ATS Compact",
    description: "Optimized for ATS systems with compact, readable format",
    features: ["ATS optimized", "Compact layout", "High readability"],
    icon: <TrendingUp className="h-5 w-5" />,
    color: "#FF6B6B"
  }
]

export default function TemplatesShowcase() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Professional Resume Templates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Choose from our collection of professionally designed templates, each crafted to help you land your dream job.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${template.color}20`, color: template.color }}
                  >
                    {template.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {template.name}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {template.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link href="/template">
                    Preview Template
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="lg" className="group" asChild>
          <Link href="/template">
            View All Templates
            <FileText className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
