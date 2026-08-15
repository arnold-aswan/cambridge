import { Button } from "#/components/ui/button"

const HeroSection = () => {
    return <section className="relative -mt-[120px] pt-[120px] mx-auto bg-[url('/green.jpg')] bg-cover bg-center bg-no-repeat bg- [image-rendering:auto] h-screen ">
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white max-w-2xl">
            <article className="max-w-lg space-y-4">
                <h1 className="text-8xl font-medium font-eb-garamond text-white">
                    See the world <br /><span className="italic" >clearly.</span>
                </h1>

                <p className="max-w-md pr-2 ">
                    Experience the intersection of clinical excellence and avant-garde style. Premium eye care and designer eyewear curated for Nairobi.
                </p>

                <div className="flex items-center gap-4">
                    <Button className="uppercase p-5 rounded-sm text-xs font-semibold bg-teal-700 font-plus-jakarta-sans tracking-wider">
                        book eye exam
                    </Button>

                    <Button className="uppercase p-5 rounded-sm text-xs font-semibold bg-transparent/20 border font-plus-jakarta-sans tracking-wider">
                        browse frames
                    </Button>
                </div>
            </article>
        </div>
    </section>
}

export default HeroSection