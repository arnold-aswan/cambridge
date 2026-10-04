import { ArrowRight } from "@/assets/icons"
import SectionWrapper from "../shared/SectionWrapper"

const CambridgeExperience = () => {
  return (
    <SectionWrapper bg="bg-[#F5F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl space-y-4">
            <h2 className="font-plus-jakarta-sans text-3xl sm:text-4xl font-bold text-[#031635]">
              The Cambridge Experience
            </h2>
            <p className="text-[#44474E] text-base leading-relaxed">
              Step into a space where medical precision meets boutique luxury. Our flagship clinic in Nairobi is designed to feel like a private gallery.
            </p>
          </div>

          <a
            href="#tour"
            className="inline-flex items-center gap-2 text-[#031635] font-bold border-b-2 border-[#006A6A] pb-1 hover:text-[#006A6A] transition-colors group"
          >
            <span>Take a Virtual Tour</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-3xl overflow-hidden h-95 border border-[#E4E2E2] shadow-sm">
            <img
              src="/images/clinic_interior.png"
              alt="Luxury eyewear boutique interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-95 border border-[#E4E2E2] shadow-sm">
            <img
              src="/images/oct_scanner.png"
              alt="Modern eye testing room"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CambridgeExperience
