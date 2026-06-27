import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'brand' | 'neutral' | 'warning'
}

const variants = {
  brand: 'bg-brand-100 text-brand-700',
  neutral: 'bg-neutral-100 text-neutral-800',
  warning: 'bg-amber-100 text-amber-800',
}

export function Badge({ children, className, variant = 'brand' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide md:text-sm',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
