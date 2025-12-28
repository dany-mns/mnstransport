import { Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ResponseSLAChipProps {
  className?: string
}

export function ResponseSLAChip({ className = '' }: ResponseSLAChipProps) {
  const { t } = useTranslation()

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-semibold border border-brand-orange/30 ${className}`}
    >
      <span className="relative flex items-center justify-center">
        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-orange/60"></span>
        <Clock className="relative w-4 h-4 text-brand-orange" />
      </span>
      <span className="text-white/90">{t('trust.responseTimeLabel')}</span>
    </span>
  )
}
