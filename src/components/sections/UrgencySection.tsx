import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/animations'
import { urgencyCards } from '../../lib/constants'
import { Icon } from '../../lib/icons'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'

export function UrgencySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionTitle title="Ön felkészült a kötelező határidőkre?" centered className="mb-12 md:mb-16" />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {urgencyCards.map((card) => (
            <motion.div key={card.id} variants={fadeInUp} id={card.id}>
              <Card className="relative flex h-full flex-col overflow-hidden pt-2">
                <div className={`absolute left-0 right-0 top-0 h-1 ${card.accentColor}`} />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-700 md:text-xl">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {card.description}
                </p>
                <Badge className={`mt-4 ${card.badgeColor}`}>{card.badge}</Badge>
                <Link
                  to={`/szolgaltatasok#${card.id}`}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Tudjon meg többet →
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
