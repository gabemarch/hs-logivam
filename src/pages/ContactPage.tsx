import { motion } from 'framer-motion'
import { Mail, Phone, Clock } from 'lucide-react'
import { fadeInUp, viewportOnce } from '../lib/animations'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LINKEDIN_URL,
  TAX_NUMBER,
} from '../lib/constants'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionTitle } from '../components/ui/SectionTitle'
import { CalendlyWidget } from '../components/ui/CalendlyWidget'
import { LinkedInIcon } from '../components/ui/LinkedInIcon'
import { ContactForm } from '../components/forms/ContactForm'

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Kapcsolat"
        description="Vegye fel a kapcsolatot HS LogiVám Zöld Kontrollinggal – foglaljon ingyenes Quick Scan auditot vagy küldjön üzenetet."
      />

      <section className="section-padding bg-gradient-to-br from-brand-50 to-white">
        <div className="container-main text-center">
          <SectionTitle
            title="Kapcsolatfelvétel"
            subtitle="Foglaljon időpontot vagy küldjön üzenetet – 1 munkanapon belül válaszolok."
            centered
          />
        </div>
      </section>

      <section className="section-padding bg-white pt-0">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOnce}
              transition={fadeInUp.transition}
            >
              <h2 className="mb-6 font-display text-xl font-bold text-brand-700 md:text-2xl">
                Írjon nekem
              </h2>
              <ContactForm showTopic />
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOnce}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              <h2 className="mb-6 font-display text-xl font-bold text-brand-700 md:text-2xl">
                Vagy foglaljon időpontot közvetlenül!
              </h2>
              <CalendlyWidget mode="inline" />

              <div className="mt-8 space-y-4 rounded-2xl bg-brand-50 p-6">
                <h3 className="font-display font-bold text-brand-700">Elérhetőségek</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-brand-600"
                >
                  <Mail className="h-5 w-5 shrink-0 text-brand-500" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-brand-600"
                >
                  <Phone className="h-5 w-5 shrink-0 text-brand-500" />
                  {CONTACT_PHONE}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-brand-600"
                >
                  <LinkedInIcon className="h-5 w-5 shrink-0 text-brand-500" />
                  LinkedIn profil
                </a>
                <p className="flex items-center gap-3 text-neutral-600">
                  <Clock className="h-5 w-5 shrink-0 text-brand-500" />
                  Rendelkezésre állás: H–P, 9:00–17:00
                </p>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-neutral-600">
                Herke-Szilágyi Ágnes egyéni vállalkozó
                <br />
                Adószám: {TAX_NUMBER}
                <br />
                Alanyi ÁFA-mentes
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
