import SectionWrapper from "#/components/shared/SectionWrapper"

const OurStory = () => {
  return (
    <SectionWrapper bg="bg-[#FBF9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <h2 className="font-plus-jakarta-sans text-4xl md:text-5xl font-bold text-[#031635] tracking-tight">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[#006A6A]" />
            <p className="font-playfair text-2xl text-[#44474E] leading-snug italic">
              Founded in the heart of Nairobi, Cambridge Opticians was born from a vision to redefine eye care in East Africa.
            </p>
          </div>

          <div className="space-y-6 text-[#44474E] leading-relaxed text-lg">
            <p>
              For three decades, we have remained steadfast in our commitment to combining technical mastery with an editorial eye for fashion. What started as a boutique clinic has evolved into a center for diagnostic excellence, serving families across generations.
            </p>
            <p>
              Our philosophy is simple: vision is a vital sense, but eyewear is a personal expression. By investing in the world's most advanced diagnostic technology and partnering with independent eyewear ateliers, we ensure our patients never have to choose between their health and their aesthetic.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default OurStory
