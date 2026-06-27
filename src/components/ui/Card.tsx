import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  const Component = hover ? motion.div : 'div'
  const motionProps = hover
    ? { whileHover: { y: -4 }, transition: { duration: 0.2 } }
    : {}

  return (
    <Component
      className={cn(
        'rounded-2xl bg-white p-6 shadow-md transition-shadow md:p-8',
        hover && 'hover:shadow-xl',
        className,
      )}
      {...motionProps}
    >
      {children}
    </Component>
  )
}
