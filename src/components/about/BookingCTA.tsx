import SectionWrapper from "#/components/shared/SectionWrapper"
import { Calendar, Phone, ArrowRight, Shield } from "lucide-react"

const BookingCTA = () => {
  return (
    <SectionWrapper bg="bg-[#031635]">
      <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden text-white bg-radial-clinical-hero">
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#90EFEF]/10 border border-[#90EFEF]/20 text-[#90EFEF] text-xs font-bold font-plus-jakarta-sans tracking-widest uppercase">
            <Shield className="size-4" />
            <span>Doctor-Led Consultations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-plus-jakarta-sans leading-tight">
            Experience Precision Vision Care & Bespoke Eyewear
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Book your comprehensive eye exam or private frame styling session with our specialist optometrists today. Most insurance plans accepted.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#book"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#006A6A] hover:bg-[#008080] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar className="size-4 text-[#90EFEF]" />
              <span>Schedule Examination</span>
              <ArrowRight className="size-4" />
            </a>

            <a 
              href="tel:+18005550199"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
            >
              <Phone className="size-4 text-[#90EFEF]" />
              <span>(800) 555-0199</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default BookingCTA
