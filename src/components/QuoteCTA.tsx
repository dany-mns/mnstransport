import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { company } from '@/content/company'
import { AnimatedSection } from '@/components/AnimatedSection'

interface QuoteCTAProps {
  variant?: 'default' | 'banner' | 'compact'
  className?: string
}

export function QuoteCTA({ variant = 'default', className = '' }: QuoteCTAProps) {
  const { t, i18n } = useTranslation()
  const isRo = i18n.language === 'ro'

  if (variant === 'compact') {
    return (
      <Link to="/quote" className={`btn btn-primary ${className}`}>
        {t('common.getQuote')}
        <ArrowRight className="w-4 h-4" />
      </Link>
    )
  }

  if (variant === 'banner') {
    return (
      <section className={`relative py-16 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-tracking/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  {t('cta.title')}
                </h2>
                <p className="text-[#8b95a5] mb-6 leading-relaxed">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/quote" 
                    className="btn btn-primary py-3 px-6 group"
                  >
                    {t('cta.button')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`https://wa.me/${company.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp py-3 px-6"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right">
                <div className="glass rounded-2xl p-6 space-y-4">
                  <a 
                    href={`tel:${company.contact.phoneClean}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                      <Phone className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8b95a5] uppercase tracking-wider mb-1">{isRo ? 'Telefon' : 'Phone'}</p>
                      <p className="text-white font-semibold">{company.contact.phone}</p>
                    </div>
                  </a>
                  
                  <a 
                    href={`mailto:${company.contact.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-tracking/10 flex items-center justify-center group-hover:bg-brand-tracking/20 transition-colors">
                      <Mail className="w-5 h-5 text-brand-tracking" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8b95a5] uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white font-semibold">{company.contact.email}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8b95a5] uppercase tracking-wider mb-1">{isRo ? 'Locație' : 'Location'}</p>
                      <p className="text-white font-semibold text-sm">{isRo ? company.contact.address.ro : company.contact.address.en}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className={`relative glass rounded-2xl p-8 overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl" />
      <h3 className="font-display text-xl font-bold text-white mb-3 relative z-10">
        {t('cta.title')}
      </h3>
      <p className="text-sm text-[#8b95a5] mb-6 relative z-10">
        {t('cta.subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 relative z-10">
        <Link to="/quote" className="btn btn-primary py-3 px-5 text-sm">
          {t('cta.button')}
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a href={`tel:${company.contact.phoneClean}`} className="btn btn-secondary py-3 px-5 text-sm">
          <Phone className="w-4 h-4" />
          {company.contact.phone}
        </a>
      </div>
    </div>
  )
}
