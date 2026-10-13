const offers = [
  {
    value: "20%",
    isText: false,
    title: "Student Discount",
    description: "Present a valid student ID to receive 20% off all complete pairs of spectacles and eye examinations."
  },
  {
    value: "2nd",
    isText: false,
    title: "Second Pair Reward",
    description: "Experience versatility. Enjoy significant reductions on your second set of frames purchased within 30 days."
  },
  {
    value: "☀",
    isText: true,
    title: "Prescription Sun",
    description: "Complimentary lens tinting or specialized polarized upgrades on selected prescription sunglass frames."
  }
]

const PrivilegedOpportunities = () => {
  return (
    <section className="bg-[#031635] text-white py-24 overflow-hidden relative">
      {/* Decorative skewed accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#006A6A]/10 skew-x-[-20deg] translate-x-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="mb-14 space-y-2">
          <h2 className="font-plus-jakarta-sans text-3xl sm:text-4xl font-bold">
            Privileged Opportunities
          </h2>
          <p className="text-[#8293B8] text-base">
            Exclusive benefits for our patients and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300 space-y-4"
            >
              <div className={`font-plus-jakarta-sans font-extrabold text-[#006A6A] mb-2 ${offer.isText ? 'text-5xl' : 'text-4xl'}`}>
                {offer.value}
              </div>
              <h4 className="font-plus-jakarta-sans text-xl font-bold">{offer.title}</h4>
              <p className="text-[#8293B8] text-sm leading-relaxed">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrivilegedOpportunities
