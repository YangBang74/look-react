import { useRef, useEffect, useState } from 'react'

interface InfiniteSliderProps {
  children: React.ReactNode
  autoScrollInterval?: number // интервал в миллисекундах
  cardWidth?: number // ширина карточки в пикселях
  gap?: number // отступ между карточками
}

export const InfiniteSlider = ({
  children,
  autoScrollInterval = 3000,
  cardWidth = 320,
  gap = 20,
}: InfiniteSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const childrenArray = Array.isArray(children) ? children : [children]
  const duplicatedChildren = [...childrenArray, ...childrenArray, ...childrenArray]
  const cardWidthWithGap = cardWidth + gap
  const sectionWidth = cardWidthWithGap * childrenArray.length

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Инициализация - начинаем со второго набора элементов (середина)
    container.scrollLeft = sectionWidth

    let scrollTimeout: ReturnType<typeof setTimeout>
    const handleScroll = () => {
      if (!container) return

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        if (!container) return
        // Если прокрутили в начало, переходим в конец
        if (container.scrollLeft <= 0) {
          container.style.scrollBehavior = 'auto'
          container.scrollLeft = sectionWidth * 2
          setTimeout(() => {
            if (container) container.style.scrollBehavior = 'smooth'
          }, 50)
        }
        // Если прокрутили в конец, переходим в начало
        else if (container.scrollLeft >= sectionWidth * 2 - 10) {
          container.style.scrollBehavior = 'auto'
          container.scrollLeft = sectionWidth
          setTimeout(() => {
            if (container) container.style.scrollBehavior = 'smooth'
          }, 50)
        }
      }, 100)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [sectionWidth])

  // Автоматическая прокрутка
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const startAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }

      autoScrollRef.current = setInterval(() => {
        if (!container || isDragging || isHovered) return

        container.scrollBy({
          left: cardWidthWithGap,
          behavior: 'smooth',
        })
      }, autoScrollInterval)
    }

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [cardWidthWithGap, isDragging, isHovered, autoScrollInterval])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // скорость прокрутки
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div
      className="infinite-carousel-container pb-[10px]"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseUp()
        setIsHovered(false)
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
      <div ref={trackRef} className="infinite-carousel-track">
        {duplicatedChildren.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
    </div>
  )
}



