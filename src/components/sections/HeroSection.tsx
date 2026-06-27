import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { CALENDLY_URL } from '../../lib/constants'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

function HeroDecoration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full max-w-md opacity-30 lg:opacity-50"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="200" r="100" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
      <path
        d="M200 80 C240 120 260 160 200 220 C140 160 160 120 200 80"
        fill="white"
        opacity="0.15"
      />
      <path
        d="M280 140 C310 170 320 200 280 260 C240 200 250 170 280 140"
        fill="white"
        opacity="0.1"
      />
      <path
        d="M120 180 C90 210 80 240 120 300 C160 240 150 210 120 180"
        fill="white"
        opacity="0.1"
      />
    </svg>
  )
}

export function HeroSection() {
  const openCalendly = () => {
    if (CALENDLY_URL.includes('PLACEHOLDER')) {
      window.location.href = '/kapcsolat'
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
      <div className="container-main flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 md:min-h-[calc(100vh-5rem)] md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                Új EU-s zöld rendelet kötelezi az Ön vállalatát is
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Rendszert építünk a jogszabályi kötelezettségekből.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-base leading-relaxed text-brand-100 md:text-lg"
            >
              Komplex logisztikai, vám- és fenntartható beszerzési támogatás gyártó, kereskedő és
              nemzetközi importot folytató vállalatoknak. PPWR, EUDR és CBAM megfelelés – elméleti
              csavarok nélkül.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="white" size="lg" onClick={openCalendly} className="w-full sm:w-auto">
                Kérem az ingyenes 45 perces Quick Scan auditot
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-4">
              <Link
                to="/szolgaltatasok"
                className="text-sm text-white underline underline-offset-4 transition-opacity hover:opacity-80 md:text-base"
              >
                Megnézem a szolgáltatásokat →
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-8 sm:flex-row sm:flex-wrap sm:gap-6"
            >
              {[
                'Alanyi ÁFA-mentes',
                'Online, Teams/Zoom',
                'Azonnali, élesben bevált eszköztár',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-brand-100">
                  <Check className="h-4 w-4 shrink-0 text-brand-200" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden justify-center lg:flex"
          >
            <HeroDecoration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
