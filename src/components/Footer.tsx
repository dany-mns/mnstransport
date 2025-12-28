import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { company } from '@/content/company'

export function Footer() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const isRo = lang === 'ro'

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'fleet', label: t('nav.fleet') },
    { id: 'coverage', label: t('nav.coverage') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const legalLinks = [
    { to: '/privacy', label: t('footer.privacy') },
    { to: '/cookies', label: t('footer.cookies') },
    { to: '/terms', label: t('footer.terms') },
  ]

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy to-[#050810]" />
      <div className="orb orb-orange w-[400px] h-[400px] -bottom-60 -left-40 opacity-10" />
      <div className="orb orb-blue w-[300px] h-[300px] -bottom-40 right-0 opacity-10" />
      
      <div className="divider-gradient" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-orange/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="/logo.png" 
                  alt={company.name}
                  className="w-11 h-11 relative group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block">
                  {company.name}
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.15em]">
                  Transport & Logistics
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-[#8b95a5] leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${company.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:glow-orange transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-white/60 group-hover:text-[#25d366] transition-colors" />
              </a>
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:glow-orange transition-all group"
              >
                <Phone className="w-5 h-5 text-white/60 group-hover:text-brand-orange transition-colors" />
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:glow-orange transition-all group"
              >
                <Mail className="w-5 h-5 text-white/60 group-hover:text-brand-tracking transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-5">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-[#8b95a5] hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-5">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#8b95a5] hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 glass rounded-xl p-4">
              <p className="text-xs text-[#8b95a5] space-y-1">
                <span className="block font-semibold text-white/80">{company.legalName}</span>
                <span className="block">CUI: {company.cui}</span>
                <span className="block">Reg: {company.registrationNumber}</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-5">
              {t('contact.title')}
            </h4>
            <div className="space-y-4">
              <a 
                href={`tel:${company.contact.phoneClean}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:glow-orange transition-all">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-sm text-[#8b95a5] group-hover:text-white transition-colors">{company.contact.phone}</span>
              </a>
              
              <a 
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:glow-orange transition-all">
                  <Mail className="w-5 h-5 text-brand-tracking" />
                </div>
                <span className="text-sm text-[#8b95a5] group-hover:text-white transition-colors">{company.contact.email}</span>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-sm text-[#8b95a5] pt-2">{company.contact.address[lang]}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="divider-gradient mt-10 mb-6" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#8b95a5]">
          <p>© {new Date().getFullYear()} {company.name}. {isRo ? 'Toate drepturile rezervate.' : 'All rights reserved.'}</p>
          <p className="text-white/40">{isRo ? 'Transport marfă România & Europa' : 'Freight transport Romania & Europe'}</p>
        </div>
      </div>
    </footer>
  )
}
