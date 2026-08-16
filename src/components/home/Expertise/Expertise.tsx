import { expertiseData } from "#/constants/home";
import SectionWrapper from "../../shared/SectionWrapper"
import SolutionCard from "./SolutionCard";

const Expertise = () => {
    return (
        <SectionWrapper maxHeight="max-h-[751px]">
            <section className="space-y-4 xl:space-y-8">
                <p
                    className="tracking-widest uppercase text-xs font-plus-jakarta-sans font-bold text-[teal]">
                    our expertise
                </p>

                <div>
                    <h1 className="dark-blue-text font-jakarta-sans font-bold text-4xl capitalize">
                        precision care for every vision
                    </h1>
                    <p className=" max-w-xl">
                        Tailored optical solutions using the world's most advanced diagnostic technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertiseData?.map((card) => (
                        <SolutionCard
                            key={card.key}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}

                </div>
            </section>
        </SectionWrapper>
    )
}

export default Expertise;