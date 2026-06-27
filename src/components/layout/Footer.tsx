import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { LinkedInIcon } from '../ui/LinkedInIcon'
import { navItems, CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL, TAX_NUMBER } from '../../lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-main section-padding pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src="/logo.svg" alt="HS LogiVám Zöld Kontrolling" className="h-10 w-auto" loading="lazy" />
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              HS LogiVám Zöld Kontrolling – Logisztika · Vámjog · Fenntartható Megfelelés
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-700">Navigáció</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-neutral-600 transition-colors hover:text-brand-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-700">Elérhetőség</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-brand-600"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-brand-600"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-brand-600"
                >
                  <LinkedInIcon className="h-4 w-4 shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-600 md:text-sm">
          <p>
            © 2025 Herke-Szilágyi Ágnes egyéni vállalkozó · Alanyi ÁFA-mentes
          </p>
          <p className="mt-1">
            Adószám: {TAX_NUMBER} · Minden jog fenntartva
          </p>
        </div>
      </div>
    </footer>
  )
}
