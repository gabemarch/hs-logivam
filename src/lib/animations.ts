export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
}

export const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
}

export const viewportOnce = { once: true, margin: '-80px' as const }
