import { useRef, useState } from 'react'
import { Upload, X } from 'lucide-react'
import { Dialog, DialogClose, DialogContent } from '@/shared/ui'

type UploadPhotosDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  value: (string | null)[]
  onChange: (value: (string | null)[]) => void
}

export const UploadPhotosDialog = ({
  open,
  onOpenChange,
  value,
  onChange,
}: UploadPhotosDialogProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleSlotClick = (index: number) => {
    setActiveIndex(index)
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const objectUrl = URL.createObjectURL(file)

    onChange(
      (() => {
        const prev = value
        // ищем первую свободную ячейку
        const firstEmptyIndex = prev.findIndex((item) => item === null)
        const indexToUse = firstEmptyIndex !== -1 ? firstEmptyIndex : activeIndex ?? 0

        const next = [...prev]
        next[indexToUse] = objectUrl
        return next
      })()
    )

    // чтобы можно было выбрать тот же файл снова
    event.target.value = ''
  }

  const handleRemove = (index: number) => {
    onChange(value.map((item, idx) => (idx === index ? null : item)))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-white rounded-[30px] max-w-[400px]! overflow-hidden max-h-[90vh] w-full p-0"
        showCloseButton={false}>
        <div className="max-h-[90vh] overflow-y-auto dialog-scrollbar rounded-[30px] p-[30px]">
          <div className="flex items-center justify-between mb-[20px]">
            <h3 className="text-foreground text-base">Загрузка фотографий</h3>
            <DialogClose asChild>
              <button
                type="button"
                className="text-[#6c6c6c] hover:text-foreground transition-colors">
                <X className="size-[20px]" aria-hidden="true" />
              </button>
            </DialogClose>
          </div>
          <div className="space-y-auto">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="grid grid-cols-2 gap-[15px] mb-[20px]">
              {['Фото 1', 'Фото 2', 'Фото 3', 'Фото 4'].map((label, index) => {
                const preview = value[index]

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleSlotClick(index)}
                    className="relative aspect-square rounded-[15px] border-2 border-dashed border-[#e0e0e0] hover:border-[#c87faa] transition-colors overflow-hidden bg-[#FAFAFA] group cursor-pointer">
                    {preview ? (
                      <>
                        <img src={preview} alt={label} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRemove(index)
                          }}
                          className="absolute top-[8px] right-[8px] bg-white/90 rounded-full p-[6px] hover:bg-red-100 transition-colors shadow-sm z-10">
                          <X
                            className="size-[14px] text-[#6c6c6c] hover:text-red-600"
                            aria-hidden="true"
                          />
                        </button>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-[8px]">
                            <Upload className="size-[20px] text-[#c87faa]" aria-hidden="true" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full gap-[8px]">
                        <Upload
                          className="size-[24px] text-[#c8c8c8] group-hover:text-[#c87faa] transition-colors"
                          aria-hidden="true"
                        />
                        <p className=" text-[11px] text-[#9c9c9c] group-hover:text-[#c87faa] transition-colors">
                          {label}
                        </p>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
            <div className="bg-[#f7ecf2] rounded-[20px] p-[15px] mb-[20px]">
              <p className=" text-[#c87faa] text-[13px]">
                💡 Для наилучшего результата: загрузите фото целой вещи, деталей конструкции и
                фактуры ткани. Избегайте попадания посторонних предметов на фоне. Вы можете сделать
                фото самостоятельно или загрузить изображения из интернет-магазина.
              </p>
            </div>
            <DialogClose asChild>
              <button
                type="button"
                className="w-full bg-[#c87faa] text-white rounded-[100px] px-[25px] py-[12px]  text-[14px] hover:bg-[#b56d96] transition-colors uppercase">
                Готово
              </button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
