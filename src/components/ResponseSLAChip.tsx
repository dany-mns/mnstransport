import { Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ResponseSLAChipProps {
  className?: string
}

export function ResponseSLAChip({ className = '' }: ResponseSLAChipProps) {
  const { i18n } = useTranslation()
  const text = i18n.language === 'ro' ? 'Răspundem în aceeași zi' : 'Same-day response'

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-accent-100)] text-[var(--color-accent-700)] rounded-full text-sm font-medium ${className}`}
    >
      <Clock className="w-4 h-4" />
      {text}
    </span>
  )
}
