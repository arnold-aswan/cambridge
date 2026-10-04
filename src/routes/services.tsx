import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import PatientJourney from '@/components/services/PatientJourney'
import TechSuite from '@/components/services/TechSuite'
import ServicesFAQ from '@/components/services/ServicesFAQ'
import BookingCTA from '@/components/shared/BookingCTA'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  return (
    <main className="min-h-screen">
      <ServicesHero
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <ServicesList activeCategory={activeCategory} />
      <PatientJourney />
      <TechSuite />
      <ServicesFAQ />
      <BookingCTA />
    </main>
  )
}
