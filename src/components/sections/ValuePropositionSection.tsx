import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/animations'
import { uspPoints } from '../../lib/constants'
import { Icon } from '../../lib/icons'
import { SectionTitle } from '../ui/SectionTitle'

export function ValuePropositionSection() {
  return (
    <section className="section-padding bg-brand-50">
      <div className="container-main">
        <SectionTitle
          title="Gyakorlati megoldások a bonyolult uniós adminisztráció helyett"
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.blockquote
            className="relative rounded-2xl border-l-4 border-brand-500 bg-white p-6 shadow-md md:p-8"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={fadeInUp.transition}
          >
            <span className="absolute -left-1 -top-2 font-display text-6xl text-brand-200">&ldquo;</span>
            <p className="relative text-base italic leading-relaxed text-neutral-800 md:text-lg">
              Nem több száz oldalas jogi állásfoglalásokat írok. Anyaggazdálkodási vezetői és
              megfelelési referensi tapasztalattal a hátam mögött kész, élesben tesztelt beszállítói
              adatbekérő sablonokat, nyilatkozatmintákat és Beszállítói Magatartási Kódexet teszek le
              az Ön asztalára. Átvállalom a bürokráciát, hogy Ön a gyártásra és a profitra
              koncentrálhasson.
            </p>
          </motion.blockquote>

          <motion.ul
            className="space-y-5"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          >
            {uspPoints.map((point) => (
              <motion.li
                key={point.text}
                variants={fadeInUp}
                className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm md:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={point.icon} className="h-5 w-5" />
                </span>
                <span className="text-base leading-relaxed text-neutral-800 md:text-lg">{point.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
