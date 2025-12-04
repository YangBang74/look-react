import { Upload, X, Sparkles, ChevronDown, Plus, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  Select,
  Button,
} from '@/shared/ui'
import { cn } from '@/shared/lib/utils'
import { UploadPhotosDialog } from '../UploadPhotosDialog'
import {
  categoryOptions,
  subcategoryOptions,
  colorOptions,
  seasonOptions,
  useAddThingDialog,
} from './model'

type AddThingDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger?: React.ReactNode
  mode?: 'create' | 'edit'
  onDelete?: () => void
}

export const AddThingDialog = ({
  open,
  onOpenChange,
  trigger,
  mode = 'create',
  onDelete,
}: AddThingDialogProps) => {
  const {
    selectedColors,
    selectedSeasons,
    selectedCategory,
    selectedSubcategory,
    isUploadDialogOpen,
    photoPreviews,
    storagePlace,
    storageOpen,
    addStorageDialogOpen,
    newStorageName,
    storageOptions,
    setSelectedCategory,
    setSelectedSubcategory,
    setIsUploadDialogOpen,
    setPhotoPreviews,
    setStoragePlace,
    setStorageOpen,
    setAddStorageDialogOpen,
    setNewStorageName,
    setStorageOptions,
    handleColorToggle,
    handleSeasonToggle,
    handleSubmit,
  } = useAddThingDialog({
    onClose: () => onOpenChange(false),
  })

  const dialogTitle = mode === 'edit' ? 'Редактировать вещь' : 'Добавить вещь'

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className="bg-white rounded-[30px] max-w-[600px] w-full max-h-[90vh] overflow-hidden p-0"
        showCloseButton={false}>
        <DialogHeader className="top-0 z-10 bg-white flex items-start justify-left px-[30px] py-[16px] border-b border-[#e0e0e0]">
          <DialogTitle className="text-left font-normal  text-foreground text-[18px] uppercase">
            {dialogTitle}
          </DialogTitle>
          <DialogClose asChild>
            <button
              type="button"
              className="text-[#6c6c6c] absolute right-4 top-4 hover: text-foreground transition-colors">
              <X className="size-[20px]" aria-hidden="true" />
            </button>
          </DialogClose>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="p-[30px] space-y-[25px] relative -top-4 overflow-y-auto dialog-scrollbar max-h-[calc(90vh-80px)]">
          <div className="space-y-[15px]">
            <div className="space-y-[15px]">
              <button
                type="button"
                onClick={() => setIsUploadDialogOpen(true)}
                className="w-full max-w-[420px] mx-auto aspect-3/4 bg-[#FAFAFA] border-2 border-dashed border-[#e0e0e0] rounded-[20px] hover:border-[#c87faa] hover:bg-[#f7ecf2] transition-colors flex items-center justify-center overflow-hidden">
                {photoPreviews.some((src) => src) ? (
                  <div className="grid grid-cols-2 grid-rows-2 gap-[6px] w-full h-full p-[12px]">
                    {photoPreviews.map(
                      (src, index) =>
                        src && (
                          <div
                            key={index}
                            className="w-full h-full rounded-[12px] overflow-hidden bg-[#f5f5f5]">
                            <img
                              src={src}
                              alt={`Фото ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-[15px]">
                    <Upload className="size-[48px] text-[#c87faa]" aria-hidden="true" />
                    <div className="text-center">
                      <p className="   text-foreground text-[16px] mb-[8px]">Добавить фотографии</p>
                      <p className="  text-[#6c6c6c] text-[13px]">
                        Нажмите, чтобы загрузить до 4-х фото
                      </p>
                    </div>
                  </div>
                )}
              </button>
            </div>
            <UploadPhotosDialog
              open={isUploadDialogOpen}
              onOpenChange={setIsUploadDialogOpen}
              value={photoPreviews}
              onChange={setPhotoPreviews}
            />
            <div className="space-y-[15px]">
              <h3 className="   text-foreground text-[16px]">Категория вещи *</h3>
              <Select
                placeholder="Выберите категорию 1-го уровня..."
                options={categoryOptions}
                value={selectedCategory}
                size="md"
                onChange={(value) => {
                  setSelectedCategory(value)
                  setSelectedSubcategory('')
                }}
              />
              {selectedCategory && (
                <Select
                  placeholder="Выберите категорию 2-го уровня..."
                  options={subcategoryOptions[selectedCategory] ?? []}
                  value={selectedSubcategory}
                  size="md"
                  onChange={setSelectedSubcategory}
                  className="mt-[10px]"
                />
              )}
            </div>
            <div className="space-y-[10px]">
              <Button type="button" variant="default" size="lg" className="w-full text-sm" disabled>
                Оцифровать
                <Sparkles className="size-[18px]" aria-hidden="true" />
              </Button>
              <p className="  text-[#6c6c6c] text-[12px] text-center">
                Вам доступно <span className="text-[#c87faa] font-semibold">10</span> генераций
              </p>
            </div>
            <div className="border-t border-[#e0e0e0]"></div>
            <div className="space-y-[20px]">
              <div>
                <label className="block   text-foreground text-[14px] mb-[10px]">
                  Основные цвета *
                </label>
                <div className="flex gap-[10px] flex-wrap">
                  {colorOptions.map((color) => {
                    const isSelected = selectedColors.includes(color)
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => handleColorToggle(color)}
                        className={cn(
                          'rounded-[100px] px-[20px] py-[10px] text-[14px] transition-colors',
                          isSelected
                            ? 'bg-[#c87faa] text-white'
                            : 'bg-[#f7ecf2]  text-foreground hover:bg-[#c87faa] hover:text-white'
                        )}>
                        {color}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div>
                <label className="block    text-foreground text-[14px] mb-[10px]">Сезон *</label>
                <div className="flex gap-[10px] flex-wrap">
                  {seasonOptions.map((season) => {
                    const isSelected = selectedSeasons.includes(season)
                    return (
                      <button
                        key={season}
                        type="button"
                        onClick={() => handleSeasonToggle(season)}
                        className={cn(
                          'rounded-[100px] px-[20px] py-[10px]   text-[14px] transition-colors',
                          isSelected
                            ? 'bg-[#c87faa] text-white'
                            : 'bg-[#f7ecf2]  text-foreground hover:bg-[#c87faa] hover:text-white'
                        )}>
                        {season}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div>
                <label className="block    text-foreground text-[14px] mb-[10px]">Заметки</label>
                <div className="w-full border border-border rounded-[20px] overflow-hidden">
                  <textarea
                    rows={3}
                    className="w-full dialog-scrollbar px-[20px] py-[12px] text-[14px] focus:outline-none border-none outline-none resize-none"
                    placeholder="Добавьте любые заметки о вещи"
                  />
                </div>
              </div>
              <div>
                <label className="block    text-foreground text-[14px] mb-[10px]">
                  Место хранения *
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setStorageOpen((prev) => !prev)}
                    className="w-full border border-border rounded-[20px] px-[20px] py-[12px]   text-[14px] focus:outline-none focus:border-[#c87faa] text-left flex items-center justify-between bg-white">
                    <span className={cn('text-[14px]', !storagePlace && 'text-[#6c6c6c]')}>
                      {storagePlace || 'Выберите или добавьте место хранения'}
                    </span>
                    <ChevronDown
                      className={cn(
                        'size-[16px] text-[#6c6c6c] transition-transform',
                        storageOpen && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {storageOpen && (
                    <div className="absolute z-10 w-full mt-[5px] bg-white border border-[#f6f6f6] rounded-[20px] shadow-lg max-h-[250px] overflow-y-auto">
                      {storageOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setStoragePlace(option)
                            setStorageOpen(false)
                          }}
                          className="w-full text-left px-[20px] py-[12px] text-[14px] hover:bg-[#f7ecf2] transition-colors  text-foreground">
                          {option}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setStorageOpen(false)
                          setAddStorageDialogOpen(true)
                        }}
                        className="w-full text-left px-[20px] py-[12px] text-[14px] text-[#c87faa] hover:bg-[#f7ecf2] transition-colors flex items-center gap-[8px] border-t border-[#f6f6f6]">
                        <Plus className="size-[16px]" aria-hidden="true" />
                        Добавить новое место
                      </button>
                    </div>
                  )}
                </div>
                <Dialog open={addStorageDialogOpen} onOpenChange={setAddStorageDialogOpen}>
                  <DialogContent
                    className="!max-w-[360px] !md:max-w-[420px]"
                    showCloseButton={false}>
                    <div className="space-y-[10px]">
                      <input
                        type="text"
                        placeholder="Введите место хранения"
                        className="w-full border border-[#f6f6f6] rounded-[15px] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#c87faa] mb-[10px]"
                        value={newStorageName}
                        onChange={(e) => setNewStorageName(e.target.value)}
                      />
                      <div className="flex gap-[10px]">
                        <Button
                          type="button"
                          variant="subtle"
                          size="sm"
                          className="flex-1 rounded-[15px]"
                          onClick={() => {
                            setNewStorageName('')
                            setAddStorageDialogOpen(false)
                          }}>
                          Отмена
                        </Button>
                        <Button
                          type="button"
                          variant="default"
                          size="sm"
                          className="flex-1 rounded-[15px]"
                          onClick={() => {
                            const name = newStorageName.trim()
                            if (!name) return
                            setStorageOptions((prev) =>
                              prev.includes(name) ? prev : [...prev, name]
                            )
                            setStoragePlace(name)
                            setNewStorageName('')
                            setAddStorageDialogOpen(false)
                          }}>
                          Добавить
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div>
                <label className="block    text-foreground text-[14px] mb-[10px]">
                  Ссылка на магазин
                </label>
                <input
                  type="url"
                  className="w-full border border-border rounded-[20px] px-[20px] py-[12px]   text-[14px] focus:outline-none focus:border-[#c87faa]"
                  placeholder="https://example.com/item"
                />
              </div>
              <div>
                <label className="block    text-foreground text-[14px] mb-[10px]">Бренд</label>
                <input
                  type="text"
                  className="w-full border border-border rounded-[20px] px-[20px] py-[12px]   text-[14px] focus:outline-none focus:border-[#c87faa]"
                  placeholder="Например: Zara, H&M"
                />
              </div>
              <div>
                <label className="block    text-foreground text-[14px] mb-[10px]">Цена</label>
                <input
                  type="text"
                  className="w-full border border-border rounded-[20px] px-[20px] py-[12px]   text-[14px] focus:outline-none focus:border-[#c87faa]"
                  placeholder="Например: 2500 ₽"
                />
              </div>
            </div>
          </div>
          {mode === 'edit' ? (
            <div className="flex flex-col gap-[10px] pt-[10px]">
              <button
                type="button"
                onClick={onDelete}
                className="bg-red-50 text-red-600 rounded-[100px] px-[25px] py-[14px] text-[14px] hover:bg-red-100 transition-colors flex items-center justify-center gap-[8px] uppercase">
                <Trash2 className="size-[16px]" aria-hidden="true" />
                Удалить вещь
              </button>
              <div className="flex gap-[12px]">
                <DialogClose asChild>
                  <button
                    type="button"
                    className="flex-1 bg-[#f7ecf2]  text-foreground rounded-[100px] px-[25px] py-[14px]   text-[14px] hover:bg-[#e8dce5] transition-colors uppercase">
                    Отмена
                  </button>
                </DialogClose>
                <button
                  type="submit"
                  className="flex-1 bg-[#c87faa] text-white rounded-[100px] px-[25px] py-[14px]   text-[14px] hover:bg-[#b56d96] transition-colors uppercase">
                  Сохранить
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-[12px] pt-[10px]">
              <DialogClose asChild>
                <button
                  type="button"
                  className="flex-1 bg-[#f7ecf2]  text-foreground rounded-[100px] px-[25px] py-[14px]   text-[14px] hover:bg-[#e8dce5] transition-colors uppercase">
                  Отмена
                </button>
              </DialogClose>
              <button
                type="submit"
                className="flex-1 bg-[#c87faa] text-white rounded-[100px] px-[25px] py-[14px]   text-[14px] hover:bg-[#b56d96] transition-colors uppercase">
                Сохранить
              </button>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
