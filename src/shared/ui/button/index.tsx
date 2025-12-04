import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { buttonBaseClasses, buttonVariantClasses, type ButtonVariant } from './variants'

type ButtonProps = {
  variant?: ButtonVariant
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ variant = 'default', className, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonBaseClasses, buttonVariantClasses[variant], className)} {...props}>
      {children}
    </button>
  )
}
