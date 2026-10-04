import SectionWrapper from "@/components/shared/SectionWrapper"
import { Activity, Glasses, Microscope, Sparkles } from "@/assets/icons"

const pillars = [
  {
    icon: Microscope,
    title: "Precision Retinal Diagnostics",
    description: "Every comprehensive exam includes high-resolution 3D Optical Coherence Tomography (OCT) scanning to detect early signs of glaucoma, macular degeneration, and vascular health years before symptoms appear.",
    badge: "Clinical Accuracy"
  },
  {
    icon: Glasses,
    title: "Boutique Artisan Eyewear",
    description: "We curate handcrafted frames from independent ateliers in Japan, Italy, and France. Each frame is selected for structural integrity, titanium craftsmanship, and distinctive aesthetic design.",
    badge: "Curated Luxury"
  },
  {
    icon: Activity,
    title: "Custom Digital Wavefront Lenses",
    description: "Utilizing digital lens-mapping, we tailor progressive and single-vision lenses down to 0.01 diopter precision, eliminating glare and visual distortion for optimal clarity.",
    badge: "Tailored Optics"
  },
  {
    icon: Sparkles,
    title: "Dedicated Ocular Surface Clinic",
    description: "Specialized dry-eye therapy, IPL treatments, and custom scleral contact lens fittings engineered for patients requiring complex ocular surface rehabilitation.",
    badge: "Specialized Care"
  }
]

const ClinicPhilosophy = () => {
  return (
    <SectionWrapper bg="bg-[#F5F3F3]">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <h5 className="uppercase text-[#006A6A] font-plus-jakarta-sans font-bold text-xs tracking-[1.4px]">
          The Clinical Curator Philosophy
        </h5>
        <h2 className="dark-blue-text font-plus-jakarta-sans font-bold text-3xl sm:text-4xl capitalize">
          Our Four Pillars of Optical Care
        </h2>
        <p className="text-[#44474E] text-base leading-relaxed">
          We believe superior vision requires a harmony of diagnostic medical rigor and tailored aesthetic elegance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-white rounded-2xl p-8 border border-[#E4E2E2] hover:border-[#006A6A]/40 transition-all duration-300 shadow-sm hover:shadow-md space-y-4 group"
          >
            <div className="flex items-center justify-between">
              <div className="size-12 rounded-xl bg-[#006A6A]/10 text-[#006A6A] flex items-center justify-center group-hover:bg-[#031635] group-hover:text-[#90EFEF] transition-colors duration-300">
                <pillar.icon className="size-6" />
              </div>
              <span className="text-[11px] font-bold font-plus-jakarta-sans uppercase tracking-widest text-[#006A6A] bg-[#006A6A]/10 px-3 py-1 rounded-full">
                {pillar.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold font-plus-jakarta-sans dark-blue-text">
              {pillar.title}
            </h3>

            <p className="text-sm text-[#44474E] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default ClinicPhilosophy
