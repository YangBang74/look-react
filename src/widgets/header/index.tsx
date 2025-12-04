import { useNavigate, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { UserIcon, HelpCircleIcon, Heart } from 'lucide-react'
import { useMemo, useState, useEffect } from 'react'
import { headerNavItems } from './model'
type TabType = 'shopping' | 'my-style'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  const activeTab = useMemo<TabType>(() => {
    return location.pathname === '/shopping' ? 'shopping' : 'my-style'
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#333333] sticky top-0 z-1000 right-0 transition-all duration-300 lg:px-[60px] px-5">
      <div
        className={`flex items-center justify-between w-full gap-2 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}>
        <div className="flex items-center lg:gap-[40px] md:gap-4 gap-3">
          <p
            className={`md:hidden text-lg text-white uppercase cursor-pointer hover:opacity-80 transition-all duration-300 ${
              isScrolled ? 'scale-[0.96]' : 'scale-100'
            }`}>
            LF
          </p>
          <div
            className={`flex items-center bg-[#1a1a1a] rounded-full md:p-1 md:gap-1 gap-0.5 p-0.5 transition-all duration-300 ${
              isScrolled ? 'scale-[0.96]' : 'scale-100'
            }`}>
            <button
              onClick={() => navigate('/shopping')}
              className={`md:px-5 px-3 md:py-3 py-1.25 leading-none uppercase whitespace-nowrap md:text-[0.8125rem] text-[0.625rem] self-center rounded-full transition-all duration-300 ${
                activeTab === 'shopping'
                  ? 'bg-[#c87faa] text-white'
                  : 'text-[#999999] hover:text-white'
              }`}>
                Шоппинг
            </button>
            <button
              onClick={() => navigate('/')}
              className={`md:px-5 px-3 md:py-3 cursor-pointer py-1.25 leading-none uppercase whitespace-nowrap md:text-[0.8125rem] text-[0.625rem] self-center rounded-full transition-all duration-300 ${
                activeTab === 'my-style'
                  ? 'bg-[#c87faa] text-white'
                  : 'text-[#999999] hover:text-white'
              }`}>
                Мой стиль
            </button>
          </div>
          {activeTab === 'my-style' && (
            <nav
              className={`md:flex hidden lg:gap-10 md:gap-4 gap-2 items-center transition-all duration-300 ${
                isScrolled ? 'scale-[0.96]' : 'scale-100'
              }`}>
              {headerNavItems.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    [
                      'flex items-center justify-center group transition-all duration-300 text-base uppercase',
                      isActive ? 'text-[#c87faa]' : 'text-white group-hover:text-[#c87faa]',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  }>
                    {label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-6 ">
          {activeTab === 'shopping' && (
            <button
              className={`flex items-center justify-center group transition-all duration-300 ${
                isScrolled ? 'scale-[0.96]' : 'scale-100'
              }`}>
              <Heart className="md:size-[24px] size-[20px] transition-colors text-white group-hover:text-[#c87faa]" />
            </button>
          )}
          <button
            className={`flex items-center justify-center group transition-all duration-300 ${
              isScrolled ? 'scale-[0.96]' : 'scale-100'
            }`}>
            <HelpCircleIcon className="md:size-[24px] size-[20px] transition-colors text-white group-hover:text-[#c87faa]" />
          </button>
          <button
            className={`flex items-center justify-center group transition-all duration-300 ${
              isScrolled ? 'scale-[0.96]' : 'scale-100'
            }`}>
            <UserIcon className="md:size-[24px] size-[20px] transition-colors text-white group-hover:text-[#c87faa]" />
          </button>
        </div>
      </div>
    </div>
  )
}
