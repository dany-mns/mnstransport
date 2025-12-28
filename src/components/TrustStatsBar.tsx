import { useTranslation } from 'react-i18next'
import { company } from '@/content/company'
import { Clock, Shield, MapPin, CheckCircle, Truck, Banknote } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Shield,
  MapPin,
  CheckCircle,
  Truck,
  Banknote,
}

export function TrustStatsBar() {
  const { t } = useTranslation()

  const stats = [
    {
      value: company.stats.yearsInBusiness,
      label: t('trust.yearsLabel'),
      icon: 'Clock',
    },
    {
      value: company.stats.trucks,
      label: t('trust.trucksLabel'),
      icon: 'Truck',
    },
    {
      value: `${company.stats.onTimeDelivery}%`,
      label: t('trust.onTimeLabel'),
      icon: 'CheckCircle',
    },
    {
      value: '✓',
      label: t('trust.insuredLabel'),
      icon: 'Shield',
    },
    {
      value: '24h',
      label: t('trust.responseLabel'),
      icon: 'Clock',
    },
    {
      value: '✓',
      label: t('trust.trackingLabel'),
      icon: 'MapPin',
    },
  ]

  return (
    <div className="bg-[var(--color-primary-600)] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <div key={index} className="flex flex-col items-center gap-1">
                {IconComponent && <IconComponent className="w-5 h-5 opacity-80" />}
                <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                <span className="text-xs md:text-sm opacity-90">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
