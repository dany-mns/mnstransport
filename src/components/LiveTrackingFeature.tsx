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

  const icons = [MessageCircle, Bell, MapPin]

  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-2 text-brand-tracking ${className}`}>
        <MapPin className="w-4 h-4" />
        {isRo ? 'Actualizări live' : 'Live updates'}
      </span>
    )
  }

  return (
    <div className={`card group ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:glow-blue transition-all duration-500">
          <MapPin className="w-6 h-6 text-brand-tracking" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-white">
            {isRo ? 'Tracking Live' : 'Live Tracking'}
          </h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-400 font-medium">{isRo ? 'Activ' : 'Active'}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => {
          const Icon = icons[index]
          return (
            <li key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-brand-tracking" />
              </div>
              <span className="text-sm text-[#8b95a5] pt-1">{feature}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
