import { MapPin, Bell, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface LiveTrackingFeatureProps {
  variant?: 'card' | 'inline'
  className?: string
}

export function LiveTrackingFeature({ variant = 'card', className = '' }: LiveTrackingFeatureProps) {
  const { i18n } = useTranslation()
  const isRo = i18n.language === 'ro'

  const features = isRo
    ? [
        'Actualizări regulate prin telefon/WhatsApp',
        'Notificări la punctele cheie ale traseului',
        'Informații în timp real despre statusul transportului',
      ]
    : [
        'Regular updates via phone/WhatsApp',
        'Notifications at key route points',
        'Real-time transport status information',
      ]

  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-1.5 text-[var(--color-primary-600)] ${className}`}>
        <MapPin className="w-4 h-4" />
        {isRo ? 'Actualizări live' : 'Live updates'}
      </span>
    )
  }

  return (
    <div className={`bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] rounded-xl p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center">
          <MapPin className="w-5 h-5 text-[var(--color-primary-600)]" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-secondary-900)]">
          {isRo ? 'Tracking Live' : 'Live Tracking'}
        </h3>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-[var(--color-secondary-700)]">
            {index === 0 && <MessageCircle className="w-4 h-4 mt-0.5 text-[var(--color-primary-500)]" />}
            {index === 1 && <Bell className="w-4 h-4 mt-0.5 text-[var(--color-primary-500)]" />}
            {index === 2 && <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-primary-500)]" />}
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
