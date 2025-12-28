import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Phone } from 'lucide-react'
import { company } from '@/content/company'

interface QuoteCTAProps {
  variant?: 'default' | 'banner' | 'compact'
  className?: string
}

export function QuoteCTA({ variant = 'default', className = '' }: QuoteCTAProps) {
  const { t } = useTranslation()

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
      <section className={`gradient-bg py-16 ${className}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="btn bg-white text-[var(--color-primary-600)] hover:bg-[var(--color-secondary-100)]">
              {t('cta.button')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${company.contact.phoneClean}`}
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              <Phone className="w-4 h-4" />
              {t('cta.call')}
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className={`bg-[var(--color-primary-50)] rounded-xl p-6 border border-[var(--color-primary-200)] ${className}`}>
      <h3 className="text-xl font-semibold text-[var(--color-secondary-900)] mb-2">
        {t('cta.title')}
      </h3>
      <p className="text-[var(--color-secondary-600)] mb-4">
        {t('cta.subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/quote" className="btn btn-primary">
          {t('cta.button')}
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a href={`tel:${company.contact.phoneClean}`} className="btn btn-secondary">
          <Phone className="w-4 h-4" />
          {company.contact.phone}
        </a>
      </div>
    </div>
  )
}
