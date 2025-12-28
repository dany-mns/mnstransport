import { Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface InsuranceBadgeProps {
  variant?: 'default' | 'compact'
  className?: string
}

export function InsuranceBadge({ variant = 'default', className = '' }: InsuranceBadgeProps) {
  const { t } = useTranslation()

  if (variant === 'compact') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium ${className}`}
      >
        <Shield className="w-4 h-4" />
        {t('trust.insuredLabel')}
      </span>
    )
  }

  return (
    <div
      className={`flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg ${className}`}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <Shield className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <p className="font-semibold text-green-800">{t('trust.insuredLabel')}</p>
        <p className="text-sm text-green-700">
          {t('trust.insuredLabel') === 'asigurare inclusă'
            ? 'Toate transporturile sunt asigurate complet'
            : 'All transports are fully insured'}
        </p>
      </div>
    </div>
  )
}
