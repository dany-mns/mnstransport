import { useTranslation } from 'react-i18next'
import { company } from '@/content/company'
import { Clock, Shield, MapPin, CheckCircle, Truck, Banknote } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <div className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 glass" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center mb-3 group-hover:glow-orange transition-all duration-500">
                  {IconComponent && <IconComponent className="w-5 h-5 text-brand-orange" />}
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] text-[#8b95a5] font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
