import SectionWrapper from "#/components/shared/SectionWrapper"

const CuratedSection = () => {
    return (
        <SectionWrapper bg={"bg-white"}>
            <section className="space-y-4 xl:space-y-8">
                <div className="center flex-col">
                    <h5 className="text-[teal] uppercase font-plus-jakarta-sans font-bold text-sm tracking--widest ">curated selection</h5>
                    <h1 className="bold text-4xl xl:text-6xl font-eb-garamond">The Luxury Gallery</h1>
                </div>

                <div className="flex justify-center items-center flex-wrap gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex h-116.5 w-93.25 items-center justify-center bg-linear-to-b from-black via-black/90 to-black rounded-3xl">
                            <img
                                src="/src/assets/images/home/rayban.webp"
                                alt="rayban glasses"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </SectionWrapper>
    )
}


export default CuratedSection