import { Share2, EllipsisVertical, Edit, Calendar, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Dialog,
  DialogTrigger,
  Button,
} from '@/shared/ui'
import type { LookCardProps } from '../model/type'
import { LookDetailsDialog } from './LookDetailsDialog'

export const LookCard = ({ look, formattedPrice, itemsWord }: LookCardProps) => (
  <div className="w-[320px] shrink-0">
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all group">
      <button className="w-full relative overflow-hidden bg-[#f7ecf2]">
        <img
          src={look.image}
          alt={look.title}
          className="w-full object-cover group-hover:scale-105 transition-transform h-[400px]"
        />
      </button>
      <div className="p-[15px]">
        <div className="flex items-start justify-between mb-[8px]">
          <h3 className="   text-foreground flex-1 line-clamp-2 text-[16px]">{look.title}</h3>
          <div className="relative inline-block">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex-shrink-0 w-[32px] h-[32px] rounded-full hover:bg-[#f7ecf2] flex items-center justify-center transition-colors ml-[8px]">
                <EllipsisVertical className="size-4.25 text-[#6c6c6c]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Edit className="size-4" />
                  <p>Изменить</p>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Calendar className="size-4" />
                  <p>Добавить в календарь</p>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <Trash2 className="size-4" />
                  <p>Удалить</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="mb-[12px]">
          <p className="  text-[#6c6c6c] text-[13px]">
            {look.itemsCount} {itemsWord} на общую сумму{' '}
            <span className="text-[#c87faa]">{formattedPrice}&nbsp;₽</span>
          </p>
        </div>
        <div className="flex items-center gap-[8px]">
          <Button type="button" className="flex-1 gap-[6px]" variant="outline" size="sm">
            <Share2 className="size-[14px]" aria-hidden="true" />
            Поделиться
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button type="button" className="flex-1" variant="outline" size="sm">
                Посмотреть
              </Button>
            </DialogTrigger>
            <LookDetailsDialog look={look} formattedPrice={formattedPrice} itemsWord={itemsWord} />
          </Dialog>
        </div>
      </div>
    </div>
  </div>
)
