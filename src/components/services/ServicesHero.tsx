import SectionWrapper from "#/components/shared/SectionWrapper"
import { Activity, Sparkles, Stethoscope, ShieldCheck } from "lucide-react"

interface ServicesHeroProps {
  activeCategory: string
  onSelectCategory: (category: string) => void
}

const categories = [
  { id: "all", label: "All Clinical Services" },
  { id: "diagnostics", label: "3D OCT & Diagnostics" },
  { id: "dryeye", label: "Dry Eye & Cornea Clinic" },
  { id: "lenses", label: "Custom Wavefront Lenses" },
  { id: "myopia", label: "Pediatric Myopia Control" }
]

const ServicesHero = ({ activeCategory, onSelectCategory }: ServicesHeroProps) => {
  return (
    <SectionWrapper bg="bg-[#FBF9F8]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#006A6A]/10 border border-[#006A6A]/20">
          <Stethoscope className="size-4 text-[#006A6A]" />
          <span className="text-xs font-bold font-plus-jakarta-sans tracking-[1.4px] uppercase text-[#006A6A]">
            Comprehensive Ophthalmic Care
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans dark-blue-text leading-[1.1] capitalize">
          Our Clinical Services
        </h1>

        <p className="font-playfair text-xl sm:text-2xl italic text-[#006A6A] leading-relaxed max-w-2xl mx-auto">
          "Doctor-led vision care engineered with sub-micron precision and unhurried clinical empathy."
        </p>

        <p className="text-base sm:text-lg text-[#44474E] leading-relaxed max-w-3xl mx-auto">
          From advanced 3D tomographic retinal scanning and dry-eye IPL therapy to custom scleral contact lenses and precision wavefront progressive optics, explore our full spectrum of specialized eye care.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-plus-jakarta-sans transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#031635] text-[#90EFEF] shadow-md scale-105"
                    : "bg-[#F5F3F3] text-[#44474E] hover:bg-[#E9E8E7] hover:text-[#031635]"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ServicesHero
