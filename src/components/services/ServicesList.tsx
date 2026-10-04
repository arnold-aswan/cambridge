import SectionWrapper from "#/components/shared/SectionWrapper"
import { Microscope, Clock, ArrowRight, CheckCircle2 } from "@/assets/icons"

export interface ServiceItem {
  id: string
  category: "diagnostics" | "dryeye" | "lenses" | "myopia"
  title: string
  tagline: string
  description: string
  duration: string
  equipment: string
  features: string[]
  image: string
  badge: string
}

export const servicesData: ServiceItem[] = [
  {
    id: "comprehensive-exam",
    category: "diagnostics",
    title: "Comprehensive Doctor-Led Eye Exam",
    tagline: "360-degree ocular health & digital vision optimization",
    description: "Our signature 60-minute eye examination evaluates intraocular pressure, peripheral visual fields, binocular motor alignment, and anterior segment corneal health under high-magnification slit lamp biomicroscopy.",
    duration: "45 - 60 Mins",
    equipment: "Nidek Digital Wavefront Refractor & Slit Lamp",
    features: [
      "Ultra-precise digital vision refraction",
      "Non-contact tonometer glaucoma screening",
      "Pupillary reaction & nerve alignment test",
      "Full anterior and posterior ocular evaluation"
    ],
    image: "/images/oct_scanner.png",
    badge: "Essential Annual Exam"
  },
  {
    id: "oct-retinal-imaging",
    category: "diagnostics",
    title: "3D OCT Retinal & Macular Scan",
    tagline: "Sub-micron optical coherence tomographic imaging",
    description: "Advanced cross-sectional tomographic scanning that views all 10 microscopic retinal tissue layers. Essential for early detection of glaucoma, diabetic retinopathy, and macular degeneration years before visual loss occurs.",
    duration: "20 Mins",
    equipment: "Zeiss Cirrus HD-OCT 5000",
    features: [
      "Cross-sectional retinal tissue layering",
      "Optic nerve head ganglion cell analysis",
      "Macular thickness & fluid mapping",
      "Zero-dilation rapid scan option available"
    ],
    image: "/images/corneal_topography.png",
    badge: "Advanced Imaging"
  },
  {
    id: "dry-eye-ipl",
    category: "dryeye",
    title: "Specialized Dry Eye Clinic & IPL Therapy",
    tagline: "Targeted meibomian gland thermal & light rehabilitation",
    description: "For patients suffering from burning, watery, or fatigued eyes. We combine meibography gland imaging with Intense Pulsed Light (IPL) therapy and expression to restore your natural tear film lipid layer.",
    duration: "45 Mins",
    equipment: "Lumenis M22 IPL & Oculus Keratograph 5M",
    features: [
      "Infrared meibomian gland atrophy mapping",
      "Intense Pulsed Light (IPL) anti-inflammatory therapy",
      "Punctal plug occlusion & therapeutic expression",
      "Custom preservative-free drop regimen"
    ],
    image: "/images/corneal_topography.png",
    badge: "Dry Eye Specialty"
  },
  {
    id: "scleral-lenses",
    category: "dryeye",
    title: "Scleral & Irregular Cornea Lens Fitting",
    tagline: "Bespoke gas-permeable vault lenses for complex corneas",
    description: "Custom-fit large-diameter scleral contact lenses designed for patients with keratoconus, post-LASIK ectasia, severe dry eye, or high astigmatism. Vaults over the cornea to create a smooth, liquid optical surface.",
    duration: "60 Mins",
    equipment: "3D Corneal Topography & Profilometry",
    features: [
      "Sub-micron corneal topography profiling",
      "Liquid-filled fluid reservoir for continuous hydration",
      "Custom vaulting design preventing corneal contact",
      "Unmatched crisp clarity for irregular corneas"
    ],
    image: "/images/clinic_interior.png",
    badge: "Corneal Specialist"
  },
  {
    id: "wavefront-lenses",
    category: "lenses",
    title: "Custom Digital Wavefront Lens Fitting",
    tagline: "HD digital progressive & single-vision optics",
    description: "Engineered using digital ray-tracing wavefront technology to craft customized spectacle lenses tailored to your frame wrapping angle, pantoscopic tilt, and vertex distance for distortion-free peripheral vision.",
    duration: "30 Mins",
    equipment: "Visioffice 3D Digital Centration System",
    features: [
      "Expanded 40% wider peripheral vision zone",
      "Digital anti-reflective & blue-light filtering",
      "Custom progressive corridor for seamless reading transition",
      "Precision 0.01 diopter manufacturing accuracy"
    ],
    image: "/images/clinic_interior.png",
    badge: "Custom Optics"
  },
  {
    id: "myopia-control",
    category: "myopia",
    title: "Pediatric Myopia Management",
    tagline: "Proactive axial elongation prevention for children",
    description: "Evidence-based clinical treatments to slow down nearsightedness progression in children using Orthokeratology (Ortho-K overnight lenses), dual-focus MiSight contact lenses, and low-dose atropine therapy.",
    duration: "45 Mins",
    equipment: "Optical Biometry & Axial Length Profiler",
    features: [
      "Ortho-K overnight gentle corneal shaping",
      "MiSight 1-day dual-focus myopia control lenses",
      "Axial length eye elongation tracking biometry",
      "Low-dose atropine ophthalmic drops option"
    ],
    image: "/images/optometrist_doctor.png",
    badge: "Pediatric Specialty"
  }
]

interface ServicesListProps {
  activeCategory: string
}

const ServicesList = ({ activeCategory }: ServicesListProps) => {
  const filteredServices = activeCategory === "all"
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory)

  return (
    <SectionWrapper bg="bg-[#F5F3F3]">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold font-plus-jakarta-sans dark-blue-text">
            Clinical Service Directory ({filteredServices.length})
          </h2>
          <span className="text-xs font-bold uppercase tracking-wider text-[#006A6A]">
            Showing {activeCategory === "all" ? "All Categories" : activeCategory}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E4E2E2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Header Image / Badge Banner */}
              <div className="relative h-60 overflow-hidden bg-[#031635]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#031635] via-[#031635]/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#031635]/90 text-[#90EFEF] font-bold text-xs uppercase tracking-wider backdrop-blur-md border border-[#90EFEF]/30">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#90EFEF] mb-1">
                    <Clock className="size-3.5" />
                    <span>{service.duration}</span>
                    <span>•</span>
                    <Microscope className="size-3.5" />
                    <span className="truncate">{service.equipment}</span>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-plus-jakarta-sans dark-blue-text group-hover:text-[#006A6A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#006A6A]">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#44474E] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-4 border-t border-[#E4E2E2]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#031635]">
                    Clinical Highlights:
                  </h4>
                  <ul className="space-y-1.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-[#44474E]">
                        <CheckCircle2 className="size-4 text-[#006A6A] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex items-center justify-between">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 text-xs font-bold font-plus-jakarta-sans uppercase text-[#006A6A] hover:text-[#031635] transition-colors"
                  >
                    <span>Book Service Consultation</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <span className="text-xs text-[#606060] font-medium">Doctor Prescribed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ServicesList
