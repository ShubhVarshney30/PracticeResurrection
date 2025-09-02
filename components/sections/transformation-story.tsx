"use client"

import { motion } from "framer-motion"

export default function TransformationStory() {
  return (
    <section aria-labelledby="transformation-story-title" className="border-t bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
        <header className="mb-8 md:mb-12">
          <h2
            id="transformation-story-title"
            className="text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            The Transformation: From Legacy Burden to Modern Momentum
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
            We prioritized safe, incremental evolution over risky rewrites—establishing tight feedback loops,
            clear boundaries, and measurable outcomes at every stage.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <motion.figure
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-lg border bg-card p-4"
          >
            <img
              src="/legacy-ui-cluttered-navigation-warnings.png"
              alt="Legacy UI cluttered with dense navigation and code warnings"
              className="h-auto w-full rounded-md"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Before: Tight coupling, scattered styles, and long build times slowed every change.
            </figcaption>
          </motion.figure>

          <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="flex flex-col gap-4 text-sm leading-6 text-foreground md:text-base md:leading-7"
          >
            <p className="text-pretty">
              We defined a modern, sustainable stack and phased capabilities over time—pairing a dynamic UI with
              strong boundaries, type safety, and maintainable workflows to support long‑term velocity.
            </p>
            <p className="text-pretty">
              Progressive routing and feature flags enabled side‑by‑side evolution. Each feature landed behind clear
              guardrails with an explicit scope for scalability.
            </p>
            <p className="text-pretty">
              As shared components, accessibility checks, and observability grew, velocity followed. We traded fear of
              change for measurable, repeatable improvements.
            </p>
          </motion.article>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4 text-sm leading-6 text-foreground md:text-base md:leading-7"
          >
            <h3 className="text-lg font-medium tracking-tight md:text-xl">Turning Points</h3>
            <ul className="ml-4 list-disc space-y-3">
              <li>Introduced a dynamic dashboard</li>
              <li>Added an ATS score checker</li>
              <li>Added an AI‑powered content enhancer</li>
              <li>Launched professional resume templates</li>
              <li>Integrated Google authentication and profile</li>
            </ul>
          </motion.article>

          <motion.figure
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="rounded-lg border bg-card p-4"
          >
            <img
              src="/modern-design-system-clean-components-fast-builds.png"
              alt="Modern UI with cohesive components and speedy feedback loops"
              className="h-auto w-full rounded-md"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              After: Unified components, typed boundaries, and fast feedback loops unlocked momentum.
            </figcaption>
          </motion.figure>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-12 rounded-lg border bg-card p-6"
        >
          <h3 className="text-lg font-medium tracking-tight md:text-xl">Outcomes You Can Feel</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-md border p-4">
              <p className="text-sm font-medium">Builds</p>
              <p className="mt-1 text-sm text-muted-foreground">
                From fragile, 30–40 minute builds to reliable, <span className="font-medium">single-digit minutes</span>
                .
              </p>
            </div>
            <div className="rounded-md border p-4">
              <p className="text-sm font-medium">Release Cadence</p>
              <p className="mt-1 text-sm text-muted-foreground">
                From bi-weekly “big drops” to <span className="font-medium">continuous delivery</span> with guardrails.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <p className="text-sm font-medium">UX Consistency</p>
              <p className="mt-1 text-sm text-muted-foreground">
                From divergent patterns to a unified system—fewer footguns, better accessibility.
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* Additional visual story frames */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <motion.figure
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-lg border bg-card p-4"
          >
            <img
              src="/refactor-typed-boundaries-module-interfaces.png"
              alt="Refactoring to typed module boundaries"
              className="h-auto w-full rounded-md"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Typed seams corralled complexity and made interfaces explicit.
            </figcaption>
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-lg border bg-card p-4"
          >
            <img
              src="/feature-flags-progressive-rollout-safety.png"
              alt="Progressive rollouts with feature flags"
              className="h-auto w-full rounded-md"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Feature flags enabled progressive rollout and safe iteration.
            </figcaption>
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-lg border bg-card p-4"
          >
            <img
              src="/observability-dashboards-metrics-tracing.png"
              alt="Observability dashboards show clear metrics and traces"
              className="h-auto w-full rounded-md"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Observability turned the unknown into dashboards, not guesses.
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
