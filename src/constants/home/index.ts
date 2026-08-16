import { Archive, Eye, FileUser, Glasses, ShieldUser, Star, UserRoundSearch } from "@/assets/icons"
import type { LucideIcon } from "lucide-react"

interface ExpertiseCardData {
    key: number
    title: string
    description: string
    icon: LucideIcon
}

export const expertiseData: ExpertiseCardData[] = [
    {
        key: 1,
        title: "eye exams",
        description: "Comprehensive ocular health assessments using state-of-the-art imaging for precise diagnosis.",
        icon: Eye
    },
    {
        key: 2,
        title: "prescription glasses",
        description: "Custom-engineered lenses crafted to your exact visual requirements for perfect clarity.",
        icon: Glasses
    },
    {
        key: 3,
        title: "designer frames",
        description: "Curated collections from the world's leading fashion houses, balancing form and function.",
        icon: Star
    },
    {
        key: 4,
        title: "contact lenses",
        description: "Specialized fitting services for all types of contact lenses, including daily and monthly wear.",
        icon: UserRoundSearch
    }
]

export const whyCambridgeData: ExpertiseCardData[] = [
    {
        key: 1,
        title: "advanced diagnostics",
        description: "We use the lates AI-driven dianostic tools to map your vision with micrsoscopic precision.",
        icon: FileUser,
    },
    {
        key: 2,
        title: "qualified optometrists",
        description: "Our team is globally certified and commited to continous medical education.",
        icon: ShieldUser,
    },
    {
        key: 3,
        title: "wide eyewear selection",
        description: "From independent artisan crafters to global fashion powerhouses, we curate only the best.",
        icon: Archive,
    },

]