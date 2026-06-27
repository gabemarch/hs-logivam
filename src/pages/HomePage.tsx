import { PageMeta } from '../components/ui/PageMeta'
import { HeroSection } from '../components/sections/HeroSection'
import { UrgencySection } from '../components/sections/UrgencySection'
import { ValuePropositionSection } from '../components/sections/ValuePropositionSection'
import { PackagesPreviewSection } from '../components/sections/PackagesPreviewSection'
import { AboutPreviewSection } from '../components/sections/AboutPreviewSection'
import { ContactSection } from '../components/sections/ContactSection'

export function HomePage() {
  return (
    <>
      <PageMeta />
      <HeroSection />
      <UrgencySection />
      <ValuePropositionSection />
      <PackagesPreviewSection />
      <AboutPreviewSection />
      <ContactSection />
    </>
  )
}
