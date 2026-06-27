import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../lib/animations'
import { CalendlyWidget } from '../ui/CalendlyWidget'
import { SectionTitle } from '../ui/SectionTitle'
import { ContactForm } from '../forms/ContactForm'

export function ContactSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            title="Ne várja meg a hatósági ellenőrzést!"
            subtitle="Foglaljon egy ingyenes, 45 perces online Quick Scan auditot – és megtudja, hol állnak a legnagyobb kockázatok."
            centered
            light
          />
        </div>

        <motion.div
          className="mx-auto mt-10 max-w-4xl"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewportOnce}
          transition={fadeInUp.transition}
        >
          <CalendlyWidget mode="inline" />
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-xl rounded-2xl bg-white p-6 text-neutral-800 shadow-xl md:p-8"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewportOnce}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <h3 className="mb-6 text-center font-display text-xl font-bold text-brand-700">
            Vagy küldjön üzenetet
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
