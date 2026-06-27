import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { fadeInUp, viewportOnce } from '../../lib/animations'
import { credentials } from '../../lib/constants'
import { Icon } from '../../lib/icons'
import { Button } from '../ui/Button'

export function AboutPreviewSection() {
  return (
    <section className="section-padding bg-brand-700 text-white">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={fadeInUp.transition}
          >
            {/* TODO: Portré fotó feltöltése → public/portrait.jpg */}
            <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-brand-400 bg-gradient-to-br from-brand-500 to-brand-600 shadow-xl md:h-56 md:w-56">
              <div className="flex h-full w-full items-center justify-center">
                <User className="h-24 w-24 text-brand-200 md:h-28 md:w-28" />
              </div>
            </div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Herke-Szilágyi Ágnes</h3>
            <p className="mt-2 text-sm text-brand-100 md:text-base">
              Logisztikai és Beszerzési Tanácsadó
              <br />
              EUDR és PPWR Megfelelési Referens
            </p>
          </motion.div>

          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
          >
            <p className="text-base leading-relaxed text-brand-50 md:text-lg">
              Pályafutásomat a kezdetektől fogva a rendszerszemlélet, a precizitás és a folyamatok
              optimalizálása határozza meg. Éles húsipari és gyártási vállalati környezetben irányítottam
              komplex ellátási láncokat és menedzseltem a kötelező uniós rendszerek kiépítését.
            </p>

            <ul className="mt-8 space-y-4">
              {credentials.map((cred) => (
                <li key={cred.text} className="flex items-start gap-3 text-sm text-brand-100 md:text-base">
                  <Icon name={cred.icon} className="mt-0.5 h-5 w-5 shrink-0 text-brand-200" />
                  <span>{cred.text}</span>
                </li>
              ))}
            </ul>

            <Button to="/rolam" variant="white" size="md" className="mt-8">
              Tudjon meg többet rólam →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
