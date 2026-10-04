import { Eye, Microscope, Activity, Scan } from "@/assets/icons"
import SectionWrapper from "@/components/shared/SectionWrapper"

const PrecisionDiagnosticsBento = () => {
  return (
    <SectionWrapper bg="bg-[#F5F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14 space-y-3">
          <h2 className="font-plus-jakarta-sans text-3xl sm:text-4xl font-bold text-[#031635]">
            Precision Diagnostics
          </h2>
          <p className="text-[#44474E] max-w-xl text-base sm:text-lg">
            We utilize hospital-grade equipment to detect the earliest signs of eye conditions before they impact your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-140">
          {/* Digital Retinal Imaging (Col span 8) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-[#031635] min-h-75 md:min-h-full transition-all hover:scale-[1.01]">
            <img
              src="/images/oct_scanner.png"
              alt="Digital Retinal Imaging"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#031635] via-[#031635]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-10 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#006A6A] text-white text-xs font-bold uppercase tracking-wider mb-1">
                Hospital Grade
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Digital Retinal Imaging
              </h3>
              <p className="text-white/80 max-w-md text-sm leading-relaxed">
                Ultra-widefield scans that capture 80% of your retina in a single image for comprehensive health screening.
              </p>
            </div>
          </div>

          {/* Visual Field Analysis (Col span 4) */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-[#031635] border border-[#006A6A]/30 p-8 flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div className="size-14 rounded-2xl bg-[#006A6A]/30 text-[#90EFEF] flex items-center justify-center">
              <Eye className="size-7" />
            </div>
            <div className="space-y-2 pt-12">
              <h3 className="text-xl font-bold text-white">Visual Field Analysis</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Automated perimetry to map your peripheral vision and monitor neurological ocular health.
              </p>
            </div>
          </div>

          {/* OCT Scanning (Col span 4) */}
          <div className="md:col-span-4 group overflow-hidden rounded-3xl bg-[#E4E2E2] p-8 flex flex-col justify-between transition-all hover:bg-[#90EFEF]/20 border border-[#E4E2E2]">
            <div className="size-12 rounded-xl bg-[#031635] text-[#90EFEF] flex items-center justify-center">
              <Scan className="size-6" />
            </div>
            <div className="space-y-2 pt-6">
              <h3 className="font-bold text-xl text-[#031635]">OCT Scanning</h3>
              <p className="text-[#44474E] text-sm leading-relaxed">
                Optical Coherence Tomography provides cross-sectional views of the retina, similar to an ultrasound.
              </p>
            </div>
          </div>

          {/* Corneal Topography (Col span 8) */}
          <div className="md:col-span-8 group overflow-hidden rounded-3xl bg-white p-8 border border-[#E4E2E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all hover:border-[#006A6A]/40 shadow-sm">
            <div className="max-w-md space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006A6A]">
                <Activity className="size-4" />
                <span>3D Mapping</span>
              </div>
              <h3 className="font-bold text-2xl text-[#031635]">Corneal Topography</h3>
              <p className="text-[#44474E] text-sm leading-relaxed">
                3D mapping of the eye's surface for precision contact lens fitting and keratoconus management.
              </p>
            </div>
            <div className="shrink-0 p-5 rounded-2xl bg-[#F5F3F3] border border-[#E4E2E2]">
              <Microscope className="size-8 text-[#006A6A]" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PrecisionDiagnosticsBento
