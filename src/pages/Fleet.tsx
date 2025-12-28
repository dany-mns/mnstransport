import { useTranslation } from 'react-i18next'
import { CheckCircle, Shield, Wrench } from 'lucide-react'
import { fleet } from '@/content/company'
import { QuoteCTA } from '@/components/QuoteCTA'
import { InsuranceBadge } from '@/components/InsuranceBadge'
import { LiveTrackingFeature } from '@/components/LiveTrackingFeature'

export function Fleet() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const vehicle = fleet.vehicles[0]

  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('fleet.title')}
            </h1>
            <p className="text-lg text-white/80">{t('fleet.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-[var(--color-secondary-100)] rounded-2xl aspect-video flex items-center justify-center mb-6">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-[var(--color-secondary-200)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🚛</span>
                  </div>
                  <p className="text-[var(--color-secondary-500)]">
                    {lang === 'ro'
                      ? 'Imagine flotă - înlocuiți cu fotografii reale'
                      : 'Fleet image - replace with real photos'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-[var(--color-secondary-100)] rounded-xl aspect-video flex items-center justify-center"
                  >
                    <p className="text-sm text-[var(--color-secondary-400)]">
                      {lang === 'ro' ? `Imagine ${i}` : `Image ${i}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-secondary-900)] mb-6">
                {vehicle.type[lang]}
              </h2>

              <div className="bg-white rounded-xl border border-[var(--color-secondary-200)] p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--color-primary-600)]" />
                  {t('fleet.specs')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-[var(--color-secondary-100)]">
                    <span className="text-[var(--color-secondary-600)]">
                      {lang === 'ro' ? 'Lungime' : 'Length'}
                    </span>
                    <span className="font-medium">{vehicle.specs.length}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[var(--color-secondary-100)]">
                    <span className="text-[var(--color-secondary-600)]">
                      {lang === 'ro' ? 'Lățime' : 'Width'}
                    </span>
                    <span className="font-medium">{vehicle.specs.width}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[var(--color-secondary-100)]">
                    <span className="text-[var(--color-secondary-600)]">
                      {lang === 'ro' ? 'Înălțime' : 'Height'}
                    </span>
                    <span className="font-medium">{vehicle.specs.height}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[var(--color-secondary-100)]">
                    <span className="text-[var(--color-secondary-600)]">
                      {lang === 'ro' ? 'Capacitate' : 'Capacity'}
                    </span>
                    <span className="font-medium">{vehicle.specs.capacity}</span>
                  </div>
                  <div className="col-span-2 flex justify-between py-2">
                    <span className="text-[var(--color-secondary-600)]">
                      {lang === 'ro' ? 'Paleți' : 'Pallets'}
                    </span>
                    <span className="font-medium">{vehicle.specs.pallets}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[var(--color-secondary-200)] p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-primary-600)]" />
                  {t('fleet.features')}
                </h3>
                <ul className="space-y-3">
                  {vehicle.features[lang].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-secondary-700)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--color-secondary-50)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[var(--color-secondary-200)]">
              <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-[var(--color-primary-600)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {lang === 'ro' ? 'Întreținere regulată' : 'Regular maintenance'}
              </h3>
              <p className="text-[var(--color-secondary-600)] text-sm">
                {fleet.maintenance[lang]}
              </p>
            </div>
            <LiveTrackingFeature />
            <InsuranceBadge />
          </div>
        </div>
      </section>

      <QuoteCTA variant="banner" />
    </>
  )
}
