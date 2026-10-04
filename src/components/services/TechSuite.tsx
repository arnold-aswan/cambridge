import SectionWrapper from "#/components/shared/SectionWrapper"
import { Cpu, ShieldCheck } from "lucide-react"

const techEquipment = [
  {
    name: "Zeiss Cirrus HD-OCT 5000",
    category: "Spectral-Domain Retinal Scanner",
    description: "Captures 68,000 A-scans per second for sub-micron visualization of retinal layers and optic nerve fibers."
  },
  {
    name: "Oculus Keratograph 5M",
    category: "Corneal Topographer & Meibographer",
    description: "Evaluates tear film stability, non-invasive tear break-up time (NIKBUT), and infrared gland atrophy mapping."
  },
  {
    name: "Lumenis M22 OptiLight IPL",
    category: "Ocular Surface Light Therapy",
    description: "FDA-cleared intense pulsed light therapy engineered specifically to treat meibomian gland dysfunction and dry eye."
  },
  {
    name: "Nidek Wavefront Aberrometer",
    category: "Digital Objective Refractor",
    description: "Maps higher-order optical aberrations to craft zero-distortion digital wavefront progressive lenses."
  }
]

const TechSuite = () => {
  return (
    <SectionWrapper bg="bg-[#031635]">
      <div className="text-white space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#90EFEF]/10 border border-[#90EFEF]/20 text-[#90EFEF] text-xs font-bold font-plus-jakarta-sans tracking-widest uppercase">
              <Cpu className="size-4" />
              <span>Next-Gen Diagnostic Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-plus-jakarta-sans leading-tight">
              Hospital-Grade Diagnostic Technology
            </h2>
            <p className="text-white/80 text-base">
              We invest in world-leading diagnostic devices to detect ocular changes early and deliver unprecedented optical accuracy.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold">
            <ShieldCheck className="size-4 text-[#90EFEF]" />
            <span>FDA & CE Medical Device Certified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techEquipment.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#90EFEF]/40 transition-colors"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#90EFEF]">
                {tech.category}
              </span>
              <h3 className="text-lg font-bold font-plus-jakarta-sans text-white">
                {tech.name}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default TechSuite
