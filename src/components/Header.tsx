import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { company } from '@/content/company'

export function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'services', 'fleet', 'coverage', 'contact']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'fleet', label: t('nav.fleet') },
    { id: 'coverage', label: t('nav.coverage') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  const isActive = (id: string) => location.pathname === '/' && activeSection === id

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || mobileMenuOpen
        ? 'glass-strong py-4'
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 relative z-50 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/logo.png" 
                alt={company.name}
                className="w-12 h-12 relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-white tracking-tight">
                {company.name}
              </span>
              <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">
                Transport & Logistics
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive(link.id)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.id) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-orange rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher />
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{company.contact.phone}</span>
            </a>
            <a
              href={`https://wa.me/${company.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp py-2.5 px-6 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-3 relative z-50">
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="w-11 h-11 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-brand-orange/30"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-xl glass text-white flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div 
          className={`fixed inset-0 bg-brand-navy/98 backdrop-blur-2xl z-40 transition-all duration-500 lg:hidden flex flex-col pt-28 px-6 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`p-5 rounded-2xl font-medium text-lg transition-all text-left ${
                  isActive(link.id)
                    ? 'bg-brand-orange text-white'
                    : 'text-white/70 hover:text-white glass'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto mb-10 space-y-4">
            <div className="flex items-center justify-between p-5 rounded-2xl glass">
              <span className="text-white/60">Language</span>
              <LanguageSwitcher />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="btn btn-primary justify-center py-4"
              >
                <Phone className="w-5 h-5" />
                {t('nav.call')}
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp justify-center py-4"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
