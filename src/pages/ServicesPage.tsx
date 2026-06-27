import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations'
import { basicServices, comboPackages, faqItems } from '../lib/constants'
import { Icon } from '../lib/icons'
import { cn } from '../lib/utils'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Accordion } from '../components/ui/Accordion'
import { Button } from '../components/ui/Button'

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Szolgáltatások és Árak"
        description="Moduláris PPWR, EUDR és CBAM megfelelési csomagok kiszámítható, transzparens árazással."
      />

      <section className="section-padding bg-gradient-to-br from-brand-50 to-white">
        <div className="container-main text-center">
          <SectionTitle
            title="Moduláris szolgáltatások és kulcsrakész csomagok"
            subtitle="Kiszámítható, transzparens árazás rejtett költségek nélkül."
            centered
          />
          <Badge variant="warning" className="mt-6">
            Minden díj alanyi ÁFA-mentes (0% ÁFA)
          </Badge>
        </div>
      </section>

      <section className="section-padding bg-white pt-0">
        <div className="container-main">
          <h2 className="mb-8 font-display text-2xl font-bold text-brand-700 md:text-3xl">
            1. szint – Alapszolgáltatások
          </h2>
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          >
            {basicServices.map((service) => (
              <motion.div key={service.id} id={service.id} variants={fadeInUp} className="scroll-mt-24">
                <Card>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon name={service.icon} className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-brand-700 md:text-xl">
                            {service.name}
                          </h3>
                          <p className="mt-1 font-display text-xl font-bold text-brand-600">{service.price}</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 md:text-base">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {service.duration && (
                        <p className="mt-4 text-sm font-medium text-neutral-600">
                          Időtartam: {service.duration}
                        </p>
                      )}
                    </div>
                    <Button to="/kapcsolat" size="sm" className="shrink-0 self-start">
                      Érdekel
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-main">
          <h2 className="mb-8 font-display text-2xl font-bold text-brand-700 md:text-3xl">
            2. szint – Kombinált csomagok
          </h2>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          >
            {comboPackages.map((pkg) => (
              <motion.div key={pkg.id} variants={fadeInUp}>
                <Card
                  className={cn(
                    'flex h-full flex-col',
                    pkg.featured && 'ring-2 ring-brand-500',
                  )}
                >
                  {pkg.badge && (
                    <Badge className={cn('mb-4 self-start', pkg.featured && 'bg-brand-500 text-white')}>
                      {pkg.badge}
                    </Badge>
                  )}
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name={pkg.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-brand-700">{pkg.name}</h3>
                  <p className="mt-2 font-display text-xl font-bold text-brand-600">{pkg.price}</p>
                  {pkg.savings && (
                    <p className="mt-1 text-sm font-medium text-brand-500">{pkg.savings}</p>
                  )}
                  <ul className="mt-4 flex-1 space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item} className="text-sm text-neutral-600">• {item}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-neutral-600">Időtartam: {pkg.duration}</p>
                  <Button to="/kapcsolat" size="sm" className="mt-6 w-full">
                    Ajánlatot kérek
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="retainer" className="section-padding scroll-mt-24 bg-white">
        <div className="container-main">
          <h2 className="mb-8 font-display text-2xl font-bold text-brand-700 md:text-3xl">
            3. szint – Havi fix átalánydíj
          </h2>
          <Card hover={false}>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-brand-700">
                  Külsős Megfelelési Referens (Retainer)
                </h3>
                <p className="mt-2 font-display text-lg font-bold text-brand-600">
                  Egyedi ajánlat alapján (általában 80 000–150 000 Ft/hó)
                </p>
                <ul className="mt-4 space-y-2 text-neutral-600">
                  <li>• Folyamatos jogszabálykövetés és automatikus értesítés változásokról</li>
                  <li>• Havi 2 óra konzultáció</li>
                  <li>• Azonnali e-mail/chat elérhetőség munkanapokon</li>
                  <li>• Negyedéves megfelelési állapotjelentés</li>
                </ul>
                <p className="mt-4 text-sm font-medium text-neutral-600">Minimum: 3 hónap</p>
              </div>
              <Button to="/kapcsolat" size="md" className="shrink-0 self-start">
                Egyedi ajánlatot kérek
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-main">
          <SectionTitle title="Gyakran ismételt kérdések" centered className="mb-10" />
          <Accordion
            items={faqItems.map((item, index) => ({
              id: `faq-${index}`,
              title: item.question,
              content: <p>{item.answer}</p>,
            }))}
          />
        </div>
      </section>
    </>
  )
}
