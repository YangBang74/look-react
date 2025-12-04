import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import {
  buttonBaseClasses,
  buttonVariantClasses,
  buttonSizeClasses,
  buttonColorClasses,
  buttonRoundedClasses,
  type ButtonColor,
  type ButtonSize,
  type ButtonRounded,
  type ButtonVariant,
} from './variants'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
  rounded?: ButtonRounded
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  variant = 'default',
  size = 'md',
  color = 'primary',
  rounded = 'full',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        buttonColorClasses[color],
        buttonRoundedClasses[rounded],
        className
      )}
      {...props}>
      {children}
    </button>
  )
}
