import { useState } from 'react'
import { EllipsisVertical, ShoppingCart, SquarePen, Edit, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/shared/ui'
import { AddThingDialog } from './AddThingDialog/AddThingDialog'

type ThingCardProps = {
  title: string
  brand: string
  image: string
  inFitting?: boolean
  onToggleFitting?: () => void
  onDelete?: () => void
}

export const ThingCard = ({ title, brand, image, inFitting, onToggleFitting, onDelete }: ThingCardProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[16px] overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-3/4 bg-[#f7ecf2] relative overflow-hidden" onClick={onToggleFitting}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 cursor-pointer opacity-100 group-hover:scale-105"
        />
        <div className="absolute top-[8px] right-[8px]">
          <div className="relative inline-block">
            <DropdownMenu>
              <DropdownMenuTrigger className="p-[6px] rounded-full bg-white/90 backdrop-blur-sm text-[#6c6c6c] hover:bg-[#c87faa] hover:text-white transition-all">
                <EllipsisVertical className="size-[16px]" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                  <Edit className="size-4" />
                  <p>Редактировать</p>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive" onClick={onDelete}>
                  <Trash2 className="size-4" />
                  <p>Удалить</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className={`absolute left-[8px] bottom-[16px] rounded-[100px] flex items-center gap-[6px] transition-all uppercase   px-[12px] py-[8px] text-[11px] ${
            inFitting
              ? 'bg-[#c87faa] text-white'
              : 'bg-white/90 backdrop-blur-sm text-[#c87faa] hover:bg-[#c87faa] hover:text-white'
          }`}>
          <ShoppingCart className="size-[14px]" aria-hidden="true" />
          {inFitting ? 'В примерочной' : 'Примерить'}
        </div>
      </div>
      <div className="p-[16px]">
        <div className="mb-[10px]">
          <p className="  text-[#6c6c6c] mb-[4px] text-[12px]">{brand}</p>
          <h4 className="   text-foreground text-[14px]">{title}</h4>
        </div>
        <button
          type="button"
          className="w-full bg-[#f7ecf2] text-[#c87faa] rounded-[100px] flex items-center justify-center gap-[6px] hover:bg-[#c87faa] hover:text-white transition-colors uppercase   px-[16px] py-[10px] text-[12px]"
          onClick={() => setIsEditOpen(true)}>
          <SquarePen className="size-[14px]" aria-hidden="true" />
          Изменить
        </button>
      </div>
      <AddThingDialog
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        mode="edit"
        onDelete={onDelete}
      />
    </div>
  )
}
