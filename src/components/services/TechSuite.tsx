const diagnosticItems = [
  {
    num: "01",
    title: "OCT Retinal Imaging",
    description: "Cross-sectional retinal analysis for early detection of glaucoma and macular degeneration."
  },
  {
    num: "02",
    title: "Corneal Topography",
    description: "Precise 3D mapping of the eye's surface for custom lens fitting and keratoconus tracking."
  },
  {
    num: "03",
    title: "Visual Field Analysis",
    description: "Automated perimetry to map the peripheral and central visual function with surgical accuracy."
  }
]

const TechSuite = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Dark editorial panel */}
        <div className="lg:w-1/2 bg-[#031635] px-10 py-20 md:px-16 md:py-24 flex flex-col justify-center text-white">
          <span className="text-[#006A6A] tracking-[0.3em] font-bold text-xs uppercase mb-8 font-plus-jakarta-sans">
            The Diagnostic Suite
          </span>
          <h2 className="text-4xl sm:text-5xl font-plus-jakarta-sans font-bold mb-12 leading-tight">
            Advanced Optical <br />Engineering.
          </h2>

          <div className="space-y-10">
            {diagnosticItems.map((item) => (
              <div key={item.num} className="flex gap-6">
                <span className="text-[#006A6A] font-plus-jakarta-sans font-bold text-2xl shrink-0 leading-none pt-1">
                  {item.num}
                </span>
                <div className="space-y-1.5">
                  <h5 className="text-xl font-bold font-plus-jakarta-sans">{item.title}</h5>
                  <p className="text-[#8293B8] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Full-height image */}
        <div className="lg:w-1/2 relative min-h-105 lg:min-h-0">
          <img
            src="/images/oct_scanner.png"
            alt="High-tech OCT scanner in a dark medical environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#031635]/10" />
        </div>
      </div>
    </section>
  )
}

export default TechSuite
