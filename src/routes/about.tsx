import { createFileRoute } from '@tanstack/react-router'
import AboutHero from '@/components/about/AboutHero'
import ClinicPhilosophy from '@/components/about/ClinicPhilosophy'
import SpecialistTeam from '@/components/about/SpecialistTeam'
import BookingCTA from '@/components/shared/BookingCTA'
import OurStory from '@/components/about/OurStory'
import PrecisionDiagnosticsBento from '@/components/about/PrecisionDiagnosticsBento'
import CambridgeExperience from '@/components/about/CambridgeExperience'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <OurStory />
      <ClinicPhilosophy />
      <PrecisionDiagnosticsBento />
      <SpecialistTeam />
      <CambridgeExperience />
      <BookingCTA />
    </main>
  )
}
