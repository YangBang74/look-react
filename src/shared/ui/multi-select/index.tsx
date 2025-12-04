import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

export type MultiSelectOption = {
  label: string
  value: string
}

type MultiSelectProps = {
  label: string
  options: MultiSelectOption[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  className?: string
}

export const MultiSelect = ({
  label,
  options,
  value,
  defaultValue = [],
  onChange,
  className,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const selectedValues = value ?? internalValue

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleOptionClick = (optionValue: string) => {
    const isSelected = selectedValues.includes(optionValue)
    const next = isSelected
      ? selectedValues.filter((v) => v !== optionValue)
      : [...selectedValues, optionValue]

    if (value === undefined) {
      setInternalValue(next)
    }
    onChange?.(next)
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

  const selectedCount = selectedValues.length
  const triggerLabel =
    selectedCount === 0
      ? label
      : selectedCount === 1
      ? options.find((o) => o.value === selectedValues[0])?.label ?? label
      : `${label} (${selectedCount})`

  return (
    <div className={cn('relative w-full', className)} ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          'bg-white border rounded-[20px] px-[18px] py-[8px] flex items-center gap-[8px] w-full hover:shadow-md transition-all border-[#f6f6f6]',
          selectedCount > 0 && 'border-primary text-primary'
        )}>
        <span className=" text-[13px] flex-1 text-left">{triggerLabel}</span>
        <ChevronDown
          className={cn('size-[16px] text-primary transition-transform', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="absolute dialog-scrollbar top-full mt-[8px] left-0 right-0 bg-white border border-[#f6f6f6] rounded-[15px] shadow-lg z-20 max-h-[300px] overflow-y-auto">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleOptionClick(option.value)}
                className="w-full px-[18px] py-[10px] text-left text-[13px] transition-colors flex items-center gap-[10px] text-[#333333] hover:bg-[#f7ecf2]">
                <div
                  className={cn(
                    'w-[16px] h-[16px] rounded-[4px] border-2 flex items-center justify-center transition-colors border-[#d0d0d0] bg-white',
                    isSelected && 'border-primary bg-primary'
                  )}>
                  {isSelected && <Check className="size-3 text-white" aria-hidden="true" />}
                </div>
                {option.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
