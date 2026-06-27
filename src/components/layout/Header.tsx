import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems, CALENDLY_URL } from '../../lib/constants'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { CalendlyWidget } from '../ui/CalendlyWidget'

export function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const openCalendly = () => {
    if (CALENDLY_URL.includes('PLACEHOLDER')) {
      window.location.href = '/kapcsolat'
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'border-b border-brand-100 bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <div className="container-main flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <img src="/logo.svg" alt="HS LogiVám Zöld Kontrolling" className="hidden h-10 w-auto md:block md:h-12" />
          <img src="/logo-icon.svg" alt="HS LogiVám" className="h-10 w-auto md:hidden" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-neutral-800 transition-colors hover:text-brand-600 lg:text-base',
                  isActive && 'underline decoration-brand-400 decoration-2 underline-offset-4',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button size="sm" onClick={openCalendly}>
            Ingyenes Quick Scan
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-700 hover:bg-brand-50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü bezárása' : 'Menü megnyitása'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand-100 bg-white/95 backdrop-blur-md lg:hidden"
          >
            <nav className="container-main flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 font-medium transition-colors',
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-neutral-800 hover:bg-brand-50',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 px-4">
                <CalendlyWidget mode="popup" className="w-full" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
