"use client"

import { motion } from "framer-motion"
import BeforeAfterSlider from "@/components/ui/before-after-slider"

export default function FrontendEvolution() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-semibold mb-6 text-foreground"
      >
        Frontend Evolution
      </motion.h3>

      <p className="text-muted-foreground leading-relaxed mb-6">
        Evolved from a static, grayscale interface to a performant, accessible React experience powered by a cohesive
        design system and modern tooling.
      </p>

      <BeforeAfterSlider
        before={{
          src: "/2015-static-frontend-ui-screenshot-outdated.png",
          alt: "Old 2015 static UI (before)",
          label: "2015 Static UI",
        }}
        after={{
          src: "/modern-design-system-clean-components-fast-builds.png",
          alt: "New React UI (after)",
          label: "2025 React UI",
        }}
      />
    </section>
  )
}
