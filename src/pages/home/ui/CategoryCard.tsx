import { ShoppingCart, ExternalLink } from 'lucide-react'
import type { CategoryCardProps } from '../model/type'

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="w-[200px] shrink-0">
      <div className="bg-white border border-[#e0e0e0] rounded-[16px] overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="aspect-[3/4] bg-[#f7ecf2] relative overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-all duration-300 cursor-pointer opacity-100 group-hover:scale-105"
          />
          <button className="absolute left-[8px] bottom-[8px] rounded-[100px] flex items-center gap-[6px] transition-all uppercase   bg-white/90 backdrop-blur-sm text-[#c87faa] hover:bg-[#c87faa] hover:text-white px-[12px] py-[8px] text-[11px]">
            <ShoppingCart className="size-[14px]" aria-hidden="true" />
            Примерить
          </button>
        </div>
        <div className="p-[16px]">
          <div className="mb-[10px]">
            <p className="  text-[#6c6c6c] mb-2 text-xs">{category.brand}</p>
            <h4 className="  text-[#333333] text-sm">{category.title}</h4>
          </div>
          <button className="w-full bg-[#f7ecf2] text-[#c87faa] rounded-[100px] flex items-center justify-center gap-[6px] hover:bg-[#c87faa] hover:text-white transition-colors uppercase   px-[16px] py-[10px] text-[12px]">
            <ExternalLink className="size-[14px]" aria-hidden="true" />В магазин
          </button>
        </div>
      </div>
    </div>
  )
}
