import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations'
import { timelineItems, trustCards, CALENDLY_URL } from '../lib/constants'
import { Icon } from '../lib/icons'
import { PageMeta } from '../components/ui/PageMeta'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

export function AboutPage() {
  const openCalendly = () => {
    if (CALENDLY_URL.includes('PLACEHOLDER')) {
      window.location.href = '/kapcsolat'
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <PageMeta
        title="Rólam"
        description="Herke-Szilágyi Ágnes – logisztikai és beszerzési tanácsadó, EUDR és PPWR megfelelési referens."
      />

      <section className="section-padding bg-gradient-to-br from-brand-50 to-white">
        <div className="container-main">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="flex flex-col items-center"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={fadeInUp.transition}
            >
              {/* TODO: Portré fotó feltöltése → public/portrait.jpg */}
              <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-brand-500 bg-gradient-to-br from-brand-400 to-brand-600 shadow-xl md:h-72 md:w-72">
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-32 w-32 text-brand-100" />
                </div>
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-brand-700">Herke-Szilágyi Ágnes</h2>
              <p className="mt-2 text-center text-neutral-600">
                Logisztikai és Beszerzési Tanácsadó
                <br />
                EUDR és PPWR Megfelelési Referens
              </p>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.15 }}
            >
              <h1 className="font-display text-2xl font-bold text-brand-700 md:text-3xl lg:text-4xl">
                Ahol a logisztika, a vámjog és a fenntartható beszerzés találkozik
              </h1>
              <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
                Gyakorlati szakemberként és folyamatorientált logisztikusként célom, hogy az új uniós
                zöld rendeleteket (PPWR, EUDR, CBAM) zökkenőmentesen integráljam az Ön vállalatának
                mindennapi működésébe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <SectionTitle title="Ki áll a HS LogiVám Zöld Kontrolling mögött?" className="mb-8" />
          <motion.div
            className="space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={fadeInUp.transition}
          >
            <p>
              Pályafutásomat a kezdetektől fogva a rendszerszemlélet, a precizitás és a folyamatok
              optimalizálása határozza meg. Meggyőződésem, hogy a sikeres vállalati működés kulcsa a
              területek közötti teljes összhang: a mai nemzetközi piacokon a fizikai árumozgás
              (logisztika), a hatósági eljárások (vámjog) és a környezetvédelmi kötelezettségek
              kőkemény pénzügyi és számviteli hatással vannak a vállalatok cash-flow-jára.
            </p>
            <p>
              Éles vállalati környezetben, megbízott anyaggazdálkodási vezetőként és megfelelési
              referensként nap mint nap a gyakorlatban irányítottam komplex ellátási láncokat,
              menedzseltem a beszállítói auditokat, és építettem ki a kötelező uniós rendszereket.
              Pontosan ismerem azt a nyomást és adminisztrációs káoszt, amit a közeledő határidők
              mérnek a cégvezetésekre.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="container-main max-w-3xl">
          <SectionTitle title="Képesítések és háttér" centered className="mb-12" />
          <div className="relative space-y-8 border-l-2 border-brand-400 pl-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOnce}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              >
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-bold text-brand-700">{item.title}</h3>
                <p className="mt-1 font-medium text-neutral-800">{item.subtitle}</p>
                <p className="mt-1 text-sm text-neutral-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionTitle title="Miért bízhat bennem?" centered className="mb-12" />
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          >
            {trustCards.map((card) => (
              <motion.div key={card.title} variants={fadeInUp}>
                <Card className="h-full">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-700">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{card.text}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-brand-700 text-white">
        <div className="container-main text-center">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={fadeInUp.transition}
          >
            <h2 className="font-display text-2xl font-bold md:text-3xl">Szeretne személyesen meggyőződni?</h2>
            <Button variant="white" size="lg" className="mt-8" onClick={openCalendly}>
              Foglaljon egy ingyenes Quick Scan auditot
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
