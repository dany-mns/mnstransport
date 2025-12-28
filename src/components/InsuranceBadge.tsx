import { Shield, CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface InsuranceBadgeProps {
  variant?: 'default' | 'compact' | 'compact-light'
  className?: string
}

export function InsuranceBadge({ variant = 'default', className = '' }: InsuranceBadgeProps) {
  const { t, i18n } = useTranslation()
  const isRo = i18n.language === 'ro'

  if (variant === 'compact') {
    return (
      <span
        className={`inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-semibold text-white/90 border border-emerald-500/30 ${className}`}
      >
        <Shield className="w-4 h-4 text-emerald-400" />
        {t('trust.insuredLabel')}
      </span>
    )
  }

  if (variant === 'compact-light') {
    return (
      <span
        className={`inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 rounded-full text-sm font-semibold text-emerald-400 border border-emerald-500/20 ${className}`}
      >
        <Shield className="w-4 h-4" />
        {t('trust.insuredLabel')}
      </span>
    )
  }

  return (
    <div className={`card group ${className}`}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-lg text-white mb-0.5">{t('trust.insuredLabel')}</p>
          <p className="text-sm text-[#8b95a5] mb-2">
            {isRo
              ? 'Toate transporturile sunt asigurate complet'
              : 'All transports are fully insured'}
          </p>
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-medium">
            <CheckCircle className="w-3 h-3" />
            {isRo ? 'Asigurare CMR' : 'CMR Insurance'}
          </div>
        </div>
      </div>
    </div>
  )
}
