import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/animations'
import { packagePreviews } from '../../lib/constants'
import { Icon } from '../../lib/icons'
import { cn } from '../../lib/utils'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

export function PackagesPreviewSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mb-12 text-center md:mb-16">
          <SectionTitle
            title="Kiszámítható, transzparens díjszabás"
            subtitle="Minden díj alanyi ÁFA-mentes (0% ÁFA)"
            centered
          />
          <Badge variant="warning" className="mt-4">
            Minden díj alanyi ÁFA-mentes (0% ÁFA)
          </Badge>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {packagePreviews.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={fadeInUp}
              className={cn(pkg.featured && 'lg:scale-105 lg:-translate-y-2')}
            >
              <Card
                className={cn(
                  'flex h-full flex-col text-center',
                  pkg.featured && 'ring-2 ring-brand-500',
                )}
              >
                {pkg.featured && (
                  <Badge className="mx-auto mb-4 bg-brand-500 text-white">Kiemelt ajánlat</Badge>
                )}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={pkg.icon} className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-700">{pkg.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{pkg.subtitle}</p>
                <p className="mt-3 font-medium text-brand-600">{pkg.detail}</p>
                {pkg.price && (
                  <p className="mt-2 font-display text-lg font-bold text-brand-700">{pkg.price}</p>
                )}
                <div className="mt-auto pt-6">
                  <Button to={pkg.href} variant={pkg.featured ? 'primary' : 'outline'} size="sm">
                    {pkg.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewportOnce}
          transition={fadeInUp.transition}
        >
          <Button to="/szolgaltatasok" size="lg">
            Megnézem a teljes árlistát és a csomagokat
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
