import { useState } from "react"
import SectionWrapper from "#/components/shared/SectionWrapper"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How long does a comprehensive eye examination take?",
    answer: "Our doctor-led examinations take approximately 45 to 60 minutes. This allows ample time for digital refraction, 3D OCT retinal scanning, slit lamp biomicroscopy, and an in-depth consultation with your doctor."
  },
  {
    question: "Will my eyes be dilated during the exam?",
    answer: "With our advanced Zeiss 3D OCT retinal scanning technology, we can view high-resolution retinal layers without dilation in most routine cases. If dilation is required for specific medical assessments (e.g. peripheral retinal tears or diabetes evaluation), your doctor will discuss it prior."
  },
  {
    question: "Do you accept vision insurance and medical plans?",
    answer: "Yes, we accept major vision plans (VSP, Eyemed, Humana) as well as medical insurance (Medicare, BlueCross, Aetna) for diagnostic ocular consultations, dry eye therapies, and medical eye care. We also offer direct HSA/FSA billing."
  },
  {
    question: "What is the difference between standard and scleral contact lenses?",
    answer: "Standard contact lenses sit directly on the cornea. Scleral lenses are custom-fit larger lenses that vault over the sensitive cornea and rest on the white part of the eye (sclera), creating a continuous fluid reservoir that provides immense comfort for dry eyes and irregular corneas."
  },
  {
    question: "How often should children have their eyes examined for myopia?",
    answer: "Children should have annual eye exams starting at age 5. If nearsightedness (myopia) is detected, we recommend bi-annual monitoring to track axial eye elongation and implement myopia control treatments like Ortho-K or MiSight lenses."
  }
]

const ServicesFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <SectionWrapper bg="bg-[#F5F3F3]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006A6A]/10 text-[#006A6A] text-xs font-bold font-plus-jakarta-sans uppercase">
            <HelpCircle className="size-4" />
            <span>Patient Guidance</span>
          </div>
          <h2 className="dark-blue-text font-plus-jakarta-sans font-bold text-3xl sm:text-4xl capitalize">
            Frequently Asked Clinical Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-[#E4E2E2] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold font-plus-jakarta-sans dark-blue-text text-base sm:text-lg cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-5 text-[#006A6A] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#44474E] leading-relaxed border-t border-[#E4E2E2]">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ServicesFAQ
