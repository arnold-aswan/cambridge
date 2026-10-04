import SectionWrapper from "@/components/shared/SectionWrapper"
import { Eye, Stethoscope, Sparkles, Glasses } from "@/assets/icons"

const steps = [
  {
    step: "01",
    title: "Pre-Exam Diagnostic Scanning",
    description: "High-resolution 3D OCT retinal scan, digital autorefraction, and non-contact intraocular pressure measurement before meeting your doctor.",
    icon: Eye
  },
  {
    step: "02",
    title: "Doctor-Led Examination",
    description: "Comprehensive 45-minute examination with your optometrist to review retinal topography, binocular vision, and ocular surface health.",
    icon: Stethoscope
  },
  {
    step: "03",
    title: "Wavefront Lens Customization",
    description: "Digital ray-tracing measurement of your frame tilt and vertex distance to craft sub-diopter precision lenses.",
    icon: Sparkles
  },
  {
    step: "04",
    title: "VIP Styling & Precision Fitting",
    description: "Personalized frame pairing with our Ophthalmic Stylists in our VIP lounge suite, ensuring physical ergonomics and visual alignment.",
    icon: Glasses
  }
]

const PatientJourney = () => {
  return (
    <SectionWrapper bg="bg-[#FBF9F8]">
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
        <h5 className="uppercase text-[#006A6A] font-plus-jakarta-sans font-bold text-xs tracking-[1.4px]">
          The Patient Experience
        </h5>
        <h2 className="dark-blue-text font-plus-jakarta-sans font-bold text-3xl sm:text-4xl capitalize">
          What to Expect During Your Clinical Visit
        </h2>
        <p className="text-[#44474E] text-base">
          From advanced diagnostic pre-testing to personalized eyewear curation, we ensure a seamless and unhurried care experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div
            key={s.step}
            className="bg-white rounded-2xl p-6 border border-[#E4E2E2] shadow-sm hover:shadow-md transition-all space-y-4 relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold font-plus-jakarta-sans text-[#006A6A]/20 group-hover:text-[#006A6A] transition-colors">
                {s.step}
              </span>
              <div className="size-10 rounded-xl bg-[#031635] text-[#90EFEF] flex items-center justify-center">
                <s.icon className="size-5" />
              </div>
            </div>

            <h3 className="text-base font-bold font-plus-jakarta-sans dark-blue-text">
              {s.title}
            </h3>

            <p className="text-xs text-[#44474E] leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default PatientJourney
