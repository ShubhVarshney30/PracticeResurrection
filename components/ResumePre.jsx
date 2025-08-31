"use client"

import { forwardRef } from "react"
import Template1 from "@/templates/Template1"
import Template2 from "@/templates/Template2"
import Template3 from "@/templates/Template3"
import { cn } from "@/lib/utils"

const TEMPLATES = {
  template1: Template1,
  template2: Template2,
  template3: Template3,
}

const ResumePreview = forwardRef(function ResumePreview({ resume, templateKey, fontClass = "font-sans" }, ref) {
  const Template = TEMPLATES[templateKey] || Template1
  return (
    <div ref={ref} className={cn("mx-auto w-[800px] bg-white text-black print:bg-white", fontClass)}>
      {/* Approx A4 canvas with padding for print */}
      <div className="w-[800px] min-h-[1131px] p-8">
        <Template resume={resume} />
      </div>
    </div>
  )
})

export default ResumePreview
