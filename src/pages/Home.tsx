import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Phone,
  MapPin,
  Globe,
  Target,
  Calendar,
  Headphones,
  Radar,
  Truck,
} from 'lucide-react'
import { company, services, fleet, coverage } from '@/content/company'
import { TrustStatsBar } from '@/components/TrustStatsBar'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { Testimonials } from '@/components/Testimonials'
import { QuoteCTA } from '@/components/QuoteCTA'
import { ResponseSLAChip } from '@/components/ResponseSLAChip'
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

export function Home() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const servicesList = services[lang].slice(0, 4)
  const vehicleType = fleet.vehicles[0].type[lang]

  return (
    <>
      <section className="relative bg-gradient-to-br from-[var(--color-secondary-900)] via-[var(--color-secondary-800)] to-[var(--color-primary-900)] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <ResponseSLAChip />
              <InsuranceBadge variant="compact" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                className="btn bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white text-lg py-3 px-8"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="btn border-2 border-white/30 text-white hover:bg-white/10 text-lg py-3 px-8"
              >
                <Phone className="w-5 h-5" />
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustStatsBar />

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle mx-auto">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service) => {
              const IconComponent = iconMap[service.icon]
              return (
                <div key={service.id} className="card hover:border-[var(--color-primary-300)]">
                  <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-[var(--color-primary-600)]" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-[var(--color-secondary-900)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-secondary-600)] text-sm">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-secondary">
              {t('services.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">{t('fleet.title')}</h2>
              <p className="section-subtitle mb-6">{t('fleet.subtitle')}</p>
              <div className="bg-[var(--color-secondary-100)] rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">{vehicleType}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(fleet.vehicles[0].specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-[var(--color-secondary-600)] capitalize">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/fleet" className="btn btn-primary">
                {t('fleet.viewFleet')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              <LiveTrackingFeature />
              <InsuranceBadge />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-secondary-50)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('coverage.title')}</h2>
            <p className="section-subtitle mx-auto">{t('coverage.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverage.countries.filter((c) => c.highlighted).map((country) => (
              <div
                key={country.code}
                className="bg-white rounded-xl p-6 border border-[var(--color-primary-200)] shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[var(--color-primary-600)]">
                      {country.code}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{country.name[lang]}</h3>
                    <p className="text-sm text-[var(--color-secondary-500)]">
                      {country.code === 'RO'
                        ? coverage.leadTimes[lang].domestic
                        : country.code === 'HU'
                        ? coverage.leadTimes[lang].hungary
                        : coverage.leadTimes[lang].poland}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--color-secondary-600)] text-sm">
                  {country.code === 'RO'
                    ? lang === 'ro'
                      ? 'Acoperire completă pe tot teritoriul României'
                      : 'Complete coverage across Romania'
                    : lang === 'ro'
                    ? 'Rute regulate și transport dedicat'
                    : 'Regular routes and dedicated transport'}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/coverage" className="btn btn-secondary">
              {t('coverage.viewCoverage')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <QuoteCTA variant="banner" />
    </>
  )
}
