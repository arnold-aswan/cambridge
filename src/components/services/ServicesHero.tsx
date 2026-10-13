import { Link } from '@tanstack/react-router'

const ServicesHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Editorial Copy */}
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 bg-[#90EFEF] text-[#006E6E] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            Clinical Excellence
          </span>

          <h1 className="font-plus-jakarta-sans text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-[#031635]">
            Precision Vision.{' '}
            <br />
            <span className="font-playfair italic font-bold text-[#006A6A]">
              Curated Style.
            </span>
          </h1>

          <p className="text-[#44474E] text-lg leading-relaxed max-w-lg">
            At Cambridge Opticians, we bridge the gap between high-precision optometry and avant-garde luxury. Discover a bespoke journey designed for your ocular health and aesthetic expression.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#031635] text-white px-7 py-3 rounded-md font-plus-jakarta-sans text-xs font-bold uppercase tracking-widest hover:bg-[#1A2B4B] transition-colors duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-[#006A6A] font-bold text-xs uppercase tracking-widest border-b-2 border-[#006A6A] pb-0.5 hover:text-[#031635] hover:border-[#031635] transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: Clinical Image */}
        <div className="relative h-140 sm:h-160 rounded-2xl overflow-hidden group">
          <img
            src="/images/oct_scanner.png"
            alt="Modern clinical eye exam room with advanced diagnostic equipment"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#031635]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <span className="size-2 rounded-full bg-[#90EFEF] animate-pulse" />
              <span className="text-white text-xs font-bold font-plus-jakarta-sans uppercase tracking-wider">
                Hospital-Grade Diagnostic Suite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
