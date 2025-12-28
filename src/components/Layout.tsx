import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'

export function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className={`flex-1 ${!isHome ? 'pt-24' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
