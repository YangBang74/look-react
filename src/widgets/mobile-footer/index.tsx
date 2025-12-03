import { Link, useLocation } from 'react-router-dom'
import { mobileNavItems } from './model'

export const MobileFooter = () => {
  const location = useLocation()

  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 z-[999] bg-[#333333] border-t border-[#4a4a4a] safe-area-bottom">
      <div className="grid h-[70px] grid-cols-5">
        {mobileNavItems.map(({ label, to, Icon }) => {
          const isActive = location.pathname === to

          return (
            <Link
              key={label}
              to={to}
              className="flex flex-col items-center justify-center gap-[4px] transition-colors">
              <Icon
                className={`size-[24px] transition-colors ${
                  isActive ? 'text-[#c87faa]' : 'text-[#d0d0d0]'
                }`}
                aria-hidden="true"
              />
              <span
                className={`  text-[10px] transition-colors ${
                  isActive ? 'text-[#c87faa]' : 'text-[#d0d0d0]'
                }`}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
