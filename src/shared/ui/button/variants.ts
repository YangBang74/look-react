export type ButtonVariant = 'default' | 'outline' | 'smooth'

export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonColor = 'primary' | 'secondary'

export type ButtonRounded = 'full' | 'lg' | 'md'

export const buttonBaseClasses =
  'inline-flex items-center justify-center gap-[10px] rounded-[100px] uppercase transition-colors text-[14px] disabled:opacity-60 disabled:cursor-not-allowed'

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  default: 'px-[24px] py-[12px] bg-primary text-primary-foreground hover:bg-primary',
  outline: 'px-[12px] py-[9px] border border-primary text-primary hover:bg-secondary text-[12px]',
  smooth:
    'px-[16px] py-[10px] bg-secondary text-primary hover:bg-primary hover:text-primary-foreground text-[12px]',
}

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: '',
  md: '',
  lg: '',
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
