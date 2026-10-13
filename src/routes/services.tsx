import { createFileRoute } from '@tanstack/react-router'
import ServicesHero from '@/components/services/ServicesHero'
import ComprehensiveExams from '@/components/services/ComprehensiveExams'
import SpecializedClinics from '@/components/services/SpecializedClinics'
import TechSuite from '@/components/services/TechSuite'
import EyewearBoutique from '@/components/services/EyewearBoutique'
import PrivilegedOpportunities from '@/components/services/PrivilegedOpportunities'
import BookingCTA from '@/components/shared/BookingCTA'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ComprehensiveExams />
      <SpecializedClinics />
      <TechSuite />
      <EyewearBoutique />
      <PrivilegedOpportunities />
      <BookingCTA />
    </main>
  )
}
