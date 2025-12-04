export type ButtonVariant = 'default' | 'outline' | 'smooth' | 'subtle'

export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonColor = 'primary' | 'secondary'

export type ButtonRounded = 'full' | 'lg' | 'md'

export const buttonBaseClasses =
  'inline-flex items-center justify-center gap-[10px] rounded-[100px] uppercase transition-colors text-[14px] disabled:opacity-60 disabled:cursor-not-allowed'

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  default: 'border border-primary bg-primary text-primary-foreground hover:bg-accent-foreground',
  outline: 'border border-primary text-primary hover:bg-primary-foreground',
  smooth: 'bg-secondary text-primary hover:bg-primary hover:text-primary-foreground',
  subtle: 'bg-white text-foreground border border-border hover:border-primary hover:text-primary',
}

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: 'px-[12px] py-[9px] text-xs',
  md: 'px-[16px] py-[10px] text-sm',
  lg: 'md:px-[24px] px-5 md:py-[12px] py-2.5 text-base',
}

export const buttonColorClasses: Record<ButtonColor, string> = {
  primary: '',
  secondary: '',
}

export const buttonRoundedClasses: Record<ButtonRounded, string> = {
  full: 'rounded-[100px]',
  lg: 'rounded-[16px]',
  md: 'rounded-[8px]',
}
