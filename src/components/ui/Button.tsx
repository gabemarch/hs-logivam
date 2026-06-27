import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = BaseProps & LinkProps & { href?: undefined }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-md hover:shadow-lg',
  secondary: 'bg-brand-100 text-brand-700 hover:bg-brand-200',
  outline: 'border-2 border-brand-500 text-brand-600 hover:bg-brand-50',
  white: 'bg-white text-brand-700 hover:bg-brand-50 shadow-md hover:shadow-lg',
  ghost: 'text-brand-600 hover:bg-brand-50',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = 'primary', size = 'md', className, children, ...props }, ref) {
    const classes = cn(
      'inline-flex items-center justify-center rounded-full font-display font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 cursor-pointer',
      variants[variant],
      sizes[size],
      className,
    )

    if ('to' in props && props.to) {
      const { to, ...linkProps } = props as ButtonAsLink
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} to={to} className={classes} {...linkProps}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    )
  },
)
