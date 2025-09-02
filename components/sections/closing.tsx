"use client"

import { motion } from "framer-motion"
import GridBackground from "@/components/ui/grid-background"

export default function Closing() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0">
        <GridBackground animate />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-semibold mb-4 text-foreground"
        >
          Not just revived—reimagined
        </motion.h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          A community favorite rebuilt for the present: modern frameworks, AI‑assisted features, secure auth, and a
          cohesive design system—designed for long‑term sustainability and growth.
        </p>
        <motion.a
          href="https://github.com/resume/resume.github.com"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ boxShadow: "0 0 40px rgba(0,212,255,0.35)", y: -2 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mr-4 inline-block rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium"
          aria-label="Explore the legacy repository"
        >
          View Legacy Repo
        </motion.a>
        


        <motion.a
          href="https://github.com/urjitupadhya/resume.github.com"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ boxShadow: "0 0 40px rgba(0,212,255,0.35)", y: -2 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="ml-4 inline-block rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium"
          aria-label="Explore the modernized repository"
        >
          Explore Modern Repo
        </motion.a>
      </div>
    </section>
  )
}
