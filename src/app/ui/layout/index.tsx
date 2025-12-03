import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { MobileFooter } from '@/widgets/mobile-footer'

export const Layout = () => {
  const location = useLocation()
  const isShoppingPage = location.pathname === '/shopping'

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {!isShoppingPage && <MobileFooter />}
    </div>
  )
}
