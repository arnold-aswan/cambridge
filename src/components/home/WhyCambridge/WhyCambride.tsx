import SectionWrapper from "#/components/shared/SectionWrapper"
import { whyCambridgeData } from "#/constants/home";

interface CardProps {
    bg: string
    title: string
    description: string
    titleColor?: string
    descriptionColor?: string
    height: string
}

const Card = ({
    bg,
    title,
    description,
    titleColor = "dark-blue-text",
    descriptionColor = "text-[teal]",
    height,
}: CardProps) => {
    return (
        <article className={`w-full ${bg} rounded-2xl p-4 md:p-8 ${height} space-y-2`}>
            <h1 className={`text-4xl font-bold ${titleColor}`}>
                {title}
            </h1>
            <p
                className={`text-xs font-plus-jakarta-sans tracking-[1.2px] font-bold uppercase ${descriptionColor}`}
            >
                {description}
            </p>
        </article>
    )
}

const WhyCambridge = () => {
    return (
        <SectionWrapper bg={"bg-[#FBF9F8]"}>
            <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8 justify-between">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-end lg:gap-8 order-2 lg:order-1">
                    <Card
                        bg="bg-white"
                        height="h-44"
                        title="20+"
                        description="years experience"
                        titleColor="dark-blue-text"
                        descriptionColor="text-[teal]"
                    />

                    <Card
                        bg="bg-[#031635]"
                        height="h-32"
                        title="15k+"
                        description="satisfied patients"
                        titleColor="text-white"
                        descriptionColor="text-[#8293B8]"
                    />

                    <Card
                        bg="bg-[#E9E8E7]"
                        height="h-44"
                        title="100%"
                        description="qualified doctors"
                        titleColor="dark-blue-text"
                        descriptionColor="text-[teal]"
                    />

                    <Card
                        bg="bg-white"
                        height="h-32"
                        title="50+"
                        description="global brands"
                        titleColor="dark-blue-text"
                        descriptionColor="text-[teal]"
                    />
                </div>
                <div className="space-y-4 order-1 lg:order-2">
                    <h5 className="uppercase text-[teal] font-plus-jakarta-sans font-bold text-xs tracking-[1.2px] ">
                        the clinical advantage
                    </h5>
                    <h1 className="dark-blue-text font-jakarta-sans font-bold text-4xl capitalize">
                        why cambridge opticians?
                    </h1>

                    <div className="mt-6 space-y-8">
                        {
                            whyCambridgeData?.map((card) => (
                                <article key={card.key} className="flex items-start gap-4 max-w-140 w-full">
                                    <div className="bg-[teal]/10 rounded-[12px] flex items-center justify-center size-12 min-w-12 min-h-12 ">
                                        <card.icon className="text-[teal] size-5 " />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="dark-blue-text font-jakarta-sans font-bold text-lg capitalize">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#44474E] ">
                                            {card.description}
                                        </p>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </section>
        </SectionWrapper>
    )
}

export default WhyCambridge; 