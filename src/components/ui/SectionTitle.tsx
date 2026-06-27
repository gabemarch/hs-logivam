import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../lib/animations'
import { cn } from '../../lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, centered = false, light = false, className }: SectionTitleProps) {
  return (
    <motion.div
      className={cn(centered && 'text-center', className)}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={viewportOnce}
      transition={fadeInUp.transition}
    >
      <h2
        className={cn(
          'text-2xl font-bold md:text-3xl lg:text-4xl',
          light ? 'text-white' : 'text-brand-700',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-base leading-relaxed md:text-lg',
            light ? 'text-brand-100' : 'text-neutral-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
