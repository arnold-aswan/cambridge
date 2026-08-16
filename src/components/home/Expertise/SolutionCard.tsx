import type { LucideIcon } from "lucide-react"

interface ISolutionCardProps {
    icon: LucideIcon
    title: string
    description: string
}
const SolutionCard = ({ icon: Icon, title, description }: ISolutionCardProps) => {
    return (
        <article className="p-4 xl:p-8 bg-[#F5F3F3] rounded-2xl space-y-4 ">
            <div className="p-2 bg-white size-14 rounded-xl flex items-center justify-center">
                <Icon className="size-6 text-[teal]" />
            </div>
            <h3 className="dark-blue-text capitalize font-plus-jakarta-sans font-bold text-xl">{title}</h3>
            <p className="text-[#44474E] font-inter text-sm ">{description}</p>
        </article>
    )
}

export default SolutionCard