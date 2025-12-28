import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { company } from '@/content/company'

export function Footer() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const year = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/fleet', label: t('nav.fleet') },
    { to: '/coverage', label: t('nav.coverage') },
    { to: '/quote', label: t('nav.quote') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const legalLinks = [
    { to: '/privacy', label: t('footer.privacy') },
    { to: '/cookies', label: t('footer.cookies') },
    { to: '/terms', label: t('footer.terms') },
  ]

  return (
    <footer className="bg-[var(--color-secondary-900)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--color-primary-600)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">{company.name}</span>
            </div>
            <p className="text-[var(--color-secondary-400)] mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${company.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--color-secondary-800)] rounded-lg flex items-center justify-center hover:bg-[#25d366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="w-10 h-10 bg-[var(--color-secondary-800)] rounded-lg flex items-center justify-center hover:bg-[var(--color-primary-600)] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="w-10 h-10 bg-[var(--color-secondary-800)] rounded-lg flex items-center justify-center hover:bg-[var(--color-primary-600)] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[var(--color-secondary-400)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--color-secondary-400)]">
                <Phone className="w-5 h-5 text-[var(--color-primary-400)]" />
                <a href={`tel:${company.contact.phoneClean}`} className="hover:text-white">
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-secondary-400)]">
                <Mail className="w-5 h-5 text-[var(--color-primary-400)]" />
                <a href={`mailto:${company.contact.email}`} className="hover:text-white">
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-secondary-400)]">
                <MapPin className="w-5 h-5 text-[var(--color-primary-400)] flex-shrink-0" />
                <span>{company.contact.address[lang]}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[var(--color-secondary-400)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-[var(--color-secondary-500)]">
              <p>{company.businessHours[lang]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-secondary-800)]">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-[var(--color-secondary-500)] text-sm">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  )
}
