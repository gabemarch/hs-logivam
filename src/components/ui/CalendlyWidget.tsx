import { useEffect, useState } from 'react'
import { Calendar } from 'lucide-react'
import { CALENDLY_URL } from '../../lib/constants'
import { cn } from '../../lib/utils'
import { Button } from './Button'

interface CalendlyWidgetProps {
  mode?: 'inline' | 'popup'
  className?: string
}

const isPlaceholder = CALENDLY_URL.includes('PLACEHOLDER')

export function CalendlyWidget({ mode = 'inline', className }: CalendlyWidgetProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isPlaceholder || mode !== 'inline') return

    const existing = document.querySelector('script[src*="calendly.com"]')
    if (existing) {
      setLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setLoaded(true)
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [mode])

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          'flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50 p-8 text-center',
          className,
        )}
      >
        <Calendar className="mb-4 h-12 w-12 text-brand-500" />
        <p className="font-display text-lg font-semibold text-brand-700">Calendly naptár betöltése...</p>
        <p className="mt-2 max-w-md text-sm text-neutral-600">
          A Calendly link beállítása után itt jelenik meg az időpontfoglaló naptár.
        </p>
      </div>
    )
  }

  if (mode === 'popup') {
    return (
      <Button
        variant="white"
        size="lg"
        onClick={() => {
          window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
        }}
        className={className}
      >
        <Calendar className="mr-2 h-5 w-5" />
        Ingyenes Quick Scan
      </Button>
    )
  }

  return (
    <div className={cn('relative min-h-[400px] overflow-hidden rounded-2xl bg-white', className)}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-brand-50 via-brand-100 to-brand-50" />
      )}
      <div
        className="calendly-inline-widget min-h-[400px] w-full"
        data-url={CALENDLY_URL}
        style={{ minWidth: '320px', height: '630px' }}
      />
    </div>
  )
}
