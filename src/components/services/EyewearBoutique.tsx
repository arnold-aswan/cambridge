import SectionWrapper from '@/components/shared/SectionWrapper'

const boutiqueItems = [
  {
    title: "Bespoke Spectacles",
    description: "Hand-crafted frames selected for their architectural integrity and comfort.",
    image: "/images/clinic_interior.png",
    alt: "Luxury designer spectacles displayed on a minimalist stand"
  },
  {
    title: "Contact Lenses",
    description: "From daily disposables to specialized Ortho-K lenses for overnight correction.",
    image: "/images/corneal_topography.png",
    alt: "High-end contact lens packaging in a clean medical setting"
  },
  {
    title: "Designer Sunglasses",
    description: "Premium UV protection combined with iconic fashion silhouettes.",
    image: "/images/optometrist_doctor.png",
    alt: "Person wearing stylish geometric spectacles in soft window light"
  }
]

const EyewearBoutique = () => {
  return (
    <SectionWrapper bg="bg-[#FBF9F8]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
        <div className="space-y-2">
          <h2 className="font-plus-jakarta-sans text-3xl sm:text-4xl font-bold text-[#031635] tracking-tight">
            The Boutique
          </h2>
          <p className="font-playfair italic text-[#44474E] text-base">
            Curated frames from the world's most innovative ateliers.
          </p>
        </div>
        <button className="text-[#006A6A] border-b-2 border-[#006A6A] font-bold text-xs uppercase tracking-widest pb-1 hover:text-[#031635] hover:border-[#031635] transition-all whitespace-nowrap">
          View Collections
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {boutiqueItems.map((item) => (
          <div key={item.title} className="group cursor-pointer">
            <div className="aspect-4/5 overflow-hidden rounded-2xl mb-6 bg-[#EFEDED]">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h4 className="font-plus-jakarta-sans text-xl font-bold text-[#031635] mb-2">{item.title}</h4>
            <p className="text-sm text-[#44474E] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default EyewearBoutique
