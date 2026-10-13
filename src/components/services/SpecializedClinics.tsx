import SectionWrapper from '@/components/shared/SectionWrapper'

const specialties = [
  {
    icon: (
      <svg className="size-7 text-[#006A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Pediatric Clinic",
    description: "Specialized assessments for children to ensure healthy visual development from infancy."
  },
  {
    icon: (
      <svg className="size-7 text-[#006A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Keratoconus",
    description: "Advanced management for corneal thinning using specialized scleral and hybrid lenses."
  },
  {
    icon: (
      <svg className="size-7 text-[#006A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Dry Eye Spa",
    description: "Clinical relief for chronic dryness through thermal expression and tailored ocular hydration."
  },
  {
    icon: (
      <svg className="size-7 text-[#006A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Low Vision",
    description: "Empowering independence through magnifying aids and specialized optical rehabilitation."
  }
]

const SpecializedClinics = () => {
  return (
    <SectionWrapper bg="bg-[#FBF9F8]">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-playfair italic text-3xl sm:text-4xl font-bold text-[#031635] tracking-tight">
          Specialized Eye Care
        </h2>
        <div className="h-1 w-16 bg-[#006A6A] mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialties.map((item) => (
          <div
            key={item.title}
            className="p-8 bg-[#EFEDED] rounded-2xl border-b-4 border-transparent hover:border-[#006A6A] transition-all duration-300 group space-y-4 cursor-pointer"
          >
            <div className="size-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              {item.icon}
            </div>
            <h4 className="font-plus-jakarta-sans font-bold text-[#031635] text-lg">{item.title}</h4>
            <p className="text-sm text-[#44474E] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default SpecializedClinics
