import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Youtube, Send, Mail } from 'lucide-react'
import { footerSections } from './model'

export const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>()

  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="bg-[#333333] w-full mt-10">
      <div className="contain">
        {/* desktop / tablet layout */}
        <div className="hidden md:grid grid-cols-4 gap-[40px] mb-[40px]">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="  text-white text-[16px] mb-[20px] uppercase">{section.title}</h3>
              <ul className="space-y-[12px] text-[#cccccc] text-[14px]">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {'href' in item ? (
                      <Link
                        to={item.href}
                        className="text-[#cccccc] hover:text-[#c87faa] transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <button className="text-[#cccccc] hover:text-[#c87faa] transition-colors text-left">
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* mobile accordion */}
        <div className="md:hidden space-y-[12px]">
          {footerSections.map((section, index) => {
            const isOpen = openIndex === index
            return (
              <div key={section.title} className=" pb-[12px]">
                <button
                  type="button"
                  className="w-full flex items-center gap-[4px] text-left   text-white text-[16px] mb-[8px] uppercase hover:text-[#c87faa] transition-colors"
                  onClick={() => toggleSection(index)}>
                  <ChevronDown
                    className={`size-[18px] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                  <span>{section.title}</span>
                </button>
                {isOpen && (
                  <ul className="mt-[12px] space-y-[10px] text-[#cccccc] text-[14px] footer-accordion-enter">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        {'href' in item ? (
                          <Link
                            to={item.href}
                            className="text-[#cccccc] hover:text-[#c87faa] transition-colors">
                            {item.label}
                          </Link>
                        ) : (
                          <button className="text-[#cccccc] hover:text-[#c87faa] transition-colors text-left">
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
        <div className="border-t border-[#4d4d4d] my-[40px]"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-[20px]">
          <div className="flex flex-col md:flex-row gap-[20px] items-center">
            <div className="flex gap-[10px] items-center">
              <p className="  text-[#999999] text-[14px]">Обратная связь:</p>
              <a
                href="mailto:info@lookformer.com"
                className="  text-white text-[14px] hover:text-[#c87faa] transition-colors">
                info@lookformer.com
              </a>
            </div>
            <p className="  text-[#999999] text-[14px]">© 2025 Lookformer. Все права защищены.</p>
          </div>
          <div className="flex gap-[12px] items-center">
            <Link
              to="#"
              className="bg-[#4d4d4d] rounded-full size-[40px] flex items-center justify-center hover:bg-[#c87faa] transition-colors"
              aria-label="YouTube">
              <Youtube className="size-[20px] text-white" aria-hidden="true" />
            </Link>
            <Link
              to="#"
              className="bg-[#4d4d4d] rounded-full size-[40px] flex items-center justify-center hover:bg-[#c87faa] transition-colors"
              aria-label="Telegram">
              <Send className="size-[20px] text-white" aria-hidden="true" />
            </Link>
            <Link
              to="#"
              className="bg-[#4d4d4d] rounded-full size-[40px] flex items-center justify-center hover:bg-[#c87faa] transition-colors"
              aria-label="VK">
              <Mail className="size-[20px] text-white" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
