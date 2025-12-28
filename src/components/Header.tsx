import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { company } from '@/content/company'

export function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/fleet', label: t('nav.fleet') },
    { to: '/coverage', label: t('nav.coverage') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-secondary-200)] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--color-primary-600)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-[var(--color-secondary-900)]">
              {company.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'
                    : 'text-[var(--color-secondary-700)] hover:bg-[var(--color-secondary-100)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={`https://wa.me/${company.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Link to="/quote" className="btn btn-primary text-sm py-2">
              {t('nav.quote')}
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="p-2 rounded-lg bg-[var(--color-primary-600)] text-white"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-[var(--color-secondary-100)]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-secondary-200)]">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'
                      : 'text-[var(--color-secondary-700)] hover:bg-[var(--color-secondary-100)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[var(--color-secondary-200)]">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-[var(--color-secondary-500)]">Language</span>
                <LanguageSwitcher />
              </div>
              <Link
                to="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary mx-4"
              >
                {t('nav.quote')}
              </Link>
              <a
                href={`https://wa.me/${company.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mx-4"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
