import { Eye, Glasses, Star, UserRoundSearch } from "@/assets/icons"
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