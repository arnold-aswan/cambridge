import SectionWrapper from '@/components/shared/SectionWrapper'

const ComprehensiveExams = () => {
  return (
    <SectionWrapper bg="bg-[#F5F3F3]">
      <div id="services" className="-mt-24 pt-24" /> {/* scroll anchor */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="font-plus-jakarta-sans text-3xl sm:text-4xl font-bold text-[#031635] tracking-tight">
            Comprehensive Eye Exams
          </h2>
          <p className="text-[#44474E] text-base leading-relaxed">
            Beyond a simple prescription, we perform a deep architectural analysis of your vision health.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-130">
        {/* Left: Clinical & General */}
        <div className="md:col-span-8 bg-white rounded-2xl p-10 flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#031635]/5 transition-all duration-500 border border-[#E4E2E2]">
          <div className="space-y-4">
            <div className="size-12 rounded-xl bg-[#006A6A]/10 flex items-center justify-center">
              <svg className="size-7 text-[#006A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-plus-jakarta-sans text-2xl font-bold text-[#031635]">
              Clinical &amp; General Examination
            </h3>
            <p className="text-[#44474E] max-w-md text-base leading-relaxed">
              Our standard of care includes binocular vision assessment, internal eye health screening, and digital refraction using the latest Japanese technology.
            </p>
            <ul className="space-y-2 pt-2">
              {[
                "Ultra-precise digital vision refraction",
                "Non-contact tonometer glaucoma screening",
                "Pupillary reaction & nerve alignment test",
                "Full anterior and posterior ocular evaluation",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-[#44474E]">
                  <span className="size-1.5 rounded-full bg-[#006A6A] mt-1.5 shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex items-center text-[#006A6A] font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
            Explore Clinical Protocol
            <svg className="ml-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Right: Image with overlay */}
        <div className="md:col-span-4 relative overflow-hidden rounded-2xl min-h-80 md:min-h-0">
          <img
            src="/images/corneal_topography.png"
            alt="Digital retinal mapping scanner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#031635]/25 backdrop-blur-[2px]" />
          <div className="absolute bottom-8 left-8 text-white space-y-1">
            <p className="font-plus-jakarta-sans font-bold text-xl">Digital Mapping</p>
            <p className="text-sm text-white/80">100% Non-invasive scans</p>
          </div>
        </div>

        {/* Bottom Row: OCT Scanning */}
        <div className="md:col-span-4 bg-[#031635] rounded-2xl p-8 flex flex-col justify-between group border border-[#1A2B4B]">
          <div className="size-12 rounded-xl bg-[#006A6A]/30 text-[#90EFEF] flex items-center justify-center">
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="space-y-2 pt-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#90EFEF]">Advanced Imaging</span>
            <h3 className="font-plus-jakarta-sans text-xl font-bold text-white">3D OCT Retinal Scan</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Cross-sectional retinal tissue analysis for early detection of glaucoma, macular degeneration, and diabetic retinopathy.
            </p>
          </div>
        </div>

        {/* Corneal Topography */}
        <div className="md:col-span-8 bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#E4E2E2] hover:border-[#006A6A]/40 transition-all shadow-sm">
          <div className="max-w-md space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#006A6A]">3D Mapping</span>
            <h3 className="font-plus-jakarta-sans font-bold text-2xl text-[#031635]">Corneal Topography</h3>
            <p className="text-[#44474E] text-sm leading-relaxed">
              Precise 3D mapping of the eye's surface for custom lens fitting and keratoconus management.
            </p>
          </div>
          <div className="shrink-0 p-5 rounded-2xl bg-[#F5F3F3] border border-[#E4E2E2]">
            <svg className="size-8 text-[#006A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ComprehensiveExams
