
const AboutHero = () => {
  return (
    <section className="relative h-[85vh] min-h-150 w-full flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/clinic_interior.png"
          alt="Luxury optical clinic interior"
          className="w-full h-full object-cover brightness-[0.70]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#031635]/85 via-[#031635]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pt-16">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1.5 bg-[#006A6A]/30 text-[#90EFEF] border border-[#006A6A]/40 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
            Our Legacy of Precision
          </span>

          <h1 className="font-plus-jakarta-sans text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[0.95] tracking-tighter">
            Expert Care,<br />
            <span className="font-playfair italic font-normal text-[#90EFEF]">
              Timeless Style.
            </span>
          </h1>

          <p className="text-white/85 text-lg md:text-xl font-light max-w-md leading-relaxed">
            Nairobi's premier destination for clinical excellence and curated luxury eyewear since 1994.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
