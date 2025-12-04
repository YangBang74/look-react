import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

export type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  placeholder?: string
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
  size?: 'sm' | 'md'
}

export const Select = ({
  placeholder = 'Выберите...',
  options,
  value,
  defaultValue,
  onChange,
  className,
  size = 'sm',
}: SelectProps) => {
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const selectedValue = value ?? internalValue

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleOptionClick = (optionValue: string) => {
    if (value === undefined) {
      setInternalValue(optionValue)
    }
    onChange?.(optionValue)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const selectedOption = options.find((o) => o.value === selectedValue)
  const triggerLabel = selectedOption?.label ?? placeholder

  return (
    <div className={cn('relative w-full', className)} ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          'bg-white border rounded-[20px] flex items-center gap-[8px] w-full transition-all border-border',
          size === 'sm' && 'px-[18px] py-[8px]',
          size === 'md' && 'px-[20px] py-[12px]',
          selectedValue && 'border-primary text-primary',
          open && 'border-primary'
        )}>
        <span className={cn(' text-[13px] flex-1 text-left', !selectedValue && 'text-[#6c6c6c]')}>
          {triggerLabel}
        </span>
        <ChevronDown
          className={cn(
            'size-[16px] transition-transform',
            open && 'rotate-180',
            selectedValue ? 'text-primary' : 'text-[#6c6c6c]'
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="absolute dialog-scrollbar top-full mt-[8px] left-0 right-0 bg-white border border-[#f6f6f6] rounded-[15px] shadow-lg z-20 max-h-[300px] overflow-y-auto">
          {options.map((option) => {
            const isSelected = selectedValue === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleOptionClick(option.value)}
                className={cn(
                  'w-full px-[18px] py-[10px] text-left text-[13px] transition-colors  text-foreground hover:bg-[#f7ecf2]',
                  isSelected && 'bg-[#f7ecf2] text-primary'
                )}>
                {option.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
