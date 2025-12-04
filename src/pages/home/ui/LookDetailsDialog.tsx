import { useState } from 'react'
import { Edit, Calendar, Share2, Trash2, Heart, ExternalLink } from 'lucide-react'
import { formatPrice } from '../lib/utils'
import type { LookCard, LookItem } from '../model/type'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/shared/ui'

type LookDetailsDialogProps = {
  look: LookCard
  formattedPrice: string
  itemsWord: string
  items?: LookItem[]
}

const mockItems: LookItem[] = [
  {
    id: 1,
    title: 'Белая блузка',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400',
    price: 2990,
  },
  {
    id: 2,
    title: 'Черная юбка',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400',
    price: 2790,
  },
  {
    id: 3,
    title: 'Клатч',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400',
    price: 1990,
  },
  {
    id: 4,
    title: 'Серебряные серьги',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400',
    price: 5990,
  },
]

export const LookDetailsDialog = ({
  look,
  formattedPrice,
  itemsWord,
  items = mockItems,
}: LookDetailsDialogProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const handleDelete = () => {
    // Здесь будет логика удаления
    console.log('Удаление образа:', look.id)
    setDeleteDialogOpen(false)
    // Закрыть основной диалог тоже можно здесь, если нужно
  }

  return (
    <DialogContent className="!max-w-[735px] h-[90vh] p-0 overflow-hidden">
      <DialogHeader className="sr-only">
        <DialogTitle>{look.title}</DialogTitle>
        <DialogDescription>Детали образа</DialogDescription>
      </DialogHeader>
      <div className="h-full overflow-y-auto p-[30px] dialog-scrollbar">
        <div className="mb-[30px] flex md:flex-row flex-col gap-[30px]">
          <div className="bg-[#f7ecf2] rounded-[20px] overflow-hidden flex-shrink-0 w-full md:w-[300px] h-[380px]">
            <img src={look.image} alt={look.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col min-w-0">
            <h2 className="   text-foreground uppercase mb-[12px] text-[22px]">{look.title}</h2>
            <div className="mb-[20px]">
              <p className="   text-foreground text-[16px]">
                {look.itemsCount} {itemsWord}
              </p>
              <p className="  text-[#c87faa] mt-[5px] text-[20px]">{formattedPrice}&nbsp;₽</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <button className="rounded-[100px] bg-[#c87faa] text-white hover:bg-[#b36d96] transition-all   uppercase flex items-center justify-center gap-[8px] px-[25px] py-[12px] text-[13px]">
                <Edit className="size-[16px]" aria-hidden="true" />
                Изменить
              </button>
              <button className="rounded-[100px] border border-[#c87faa] text-[#c87faa] hover:bg-[#f7ecf2] transition-all   uppercase flex items-center justify-center gap-[8px] px-[25px] py-[12px] text-[13px]">
                <Calendar className="size-[16px]" aria-hidden="true" />
                Календарь
              </button>
              <div className="flex gap-[10px]">
                <button className="flex-1 rounded-full bg-[#f7ecf2] text-[#c87faa] hover:bg-[#c87faa] hover:text-white transition-all flex items-center justify-center h-[44px]">
                  <Share2 className="size-[18px]" aria-hidden="true" />
                </button>
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                  <DialogTrigger asChild>
                    <button className="flex-1 rounded-full bg-[#f7ecf2] text-[#c87faa] hover:bg-red-500 hover:text-white transition-all flex items-center justify-center h-[44px]">
                      <Trash2 className="size-[18px]" aria-hidden="true" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[400px]">
                    <DialogHeader>
                      <DialogTitle className="   text-foreground">
                        Подтверждение удаления
                      </DialogTitle>
                      <DialogDescription className="  text-[#6c6c6c]">
                        Вы уверены, что хотите удалить этот образ?
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-[10px] mt-[20px]">
                      <DialogClose asChild>
                        <button className="flex-1 rounded-[100px] border border-[#c87faa] text-[#c87faa] hover:bg-[#f7ecf2] transition-all   uppercase px-[25px] py-[12px] text-[13px]">
                          Нет
                        </button>
                      </DialogClose>
                      <button
                        onClick={handleDelete}
                        className="flex-1 rounded-[100px] bg-red-500 text-white hover:bg-red-600 transition-all   uppercase px-[25px] py-[12px] text-[13px]">
                        Да
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="   text-foreground uppercase mb-[20px] text-[18px]">Вещи в образе</h3>
          <div className="grid gap-[12px] flex-wrap lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-[10px]">
            {items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w">
                <div className="bg-white border border-[#e0e0e0] rounded-[16px] overflow-hidden hover:shadow-lg transition-all duration-300">
                  <button className="aspect-[3/4] bg-[#f7ecf2]  max-h-72 md:max-h-full   relative overflow-hidden w-full cursor-pointer hover:opacity-90 transition-opacity">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </button>
                  <div className="p-[12px]">
                    <p className="   text-foreground line-clamp-2 mb-[8px] text-[13px]">
                      {item.title}
                    </p>
                    <p className="  text-[#c87faa] mb-[8px] text-[14px]">
                      {formatPrice(item.price)}&nbsp;₽
                    </p>
                    <div className="flex gap-[6px]">
                      <button className="flex-1 rounded-[100px] transition-all flex items-center justify-center bg-[#f5f5f5] text-[#6c6c6c] hover:bg-[#c87faa] hover:text-white py-[8px]">
                        <Heart className="size-[14px]" aria-hidden="true" />
                      </button>
                      <button className="flex-1 rounded-[100px] bg-[#333333] text-white hover:bg-[#555555] transition-all flex items-center justify-center py-[8px]">
                        <ExternalLink className="size-[14px]" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
