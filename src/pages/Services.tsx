import { useTranslation } from 'react-i18next'
import {
  MapPin,
  Globe,
  Target,
  Calendar,
  Headphones,
  Radar,
  CheckCircle,
  Truck,
} from 'lucide-react'
import { services, cargoTypes } from '@/content/company'
import { QuoteCTA } from '@/components/QuoteCTA'
import { FAQAccordion } from '@/components/FAQAccordion'
import { InsuranceBadge } from '@/components/InsuranceBadge'
import { LiveTrackingFeature } from '@/components/LiveTrackingFeature'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Globe,
  Target,
  Calendar,
  Headphones,
  Radar,
  Truck,
}

export function Services() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const servicesList = services[lang]
  const cargoList = cargoTypes[lang]

  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('services.title')}
            </h1>
            <p className="text-lg text-white/80">{t('services.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => {
              const IconComponent = iconMap[service.icon]
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-6 border border-[var(--color-secondary-200)] shadow-sm hover:shadow-md hover:border-[var(--color-primary-300)] transition-all"
                >
                  <div className="w-14 h-14 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-[var(--color-primary-600)]" />
                    )}
                  </div>
                  <h3 className="font-semibold text-xl text-[var(--color-secondary-900)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-secondary-600)]">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-secondary-50)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">
                {lang === 'ro' ? 'Ce transportăm' : 'What we transport'}
              </h2>
              <p className="section-subtitle mb-6">
                {lang === 'ro'
                  ? 'Orice se încadrează în dimensiunile standard ale cap tractor + prelată'
                  : 'Anything that fits standard tractor + curtain-sider dimensions'}
              </p>
              <ul className="grid gap-3">
                {cargoList.map((cargo, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg border border-[var(--color-secondary-200)]"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary-600)] flex-shrink-0" />
                    <span className="text-[var(--color-secondary-700)]">{cargo}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <LiveTrackingFeature />
              <InsuranceBadge />
              <QuoteCTA />
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion />

      <QuoteCTA variant="banner" />
    </>
  )
}
