import { useTranslation } from 'react-i18next'
import { Clock, FileText } from 'lucide-react'
import { coverage } from '@/content/company'
import { CoverageCountriesList } from '@/components/CoverageCountriesList'
import { QuoteCTA } from '@/components/QuoteCTA'

export function Coverage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const leadTimes = coverage.leadTimes[lang]

  const documentationSteps =
    lang === 'ro'
      ? [
          'Confirmarea detaliilor transportului',
          'Generarea documentelor CMR',
          'Verificarea mărfii la încărcare',
          'Transmiterea documentelor la livrare',
          'Copii digitale prin email/WhatsApp',
        ]
      : [
          'Transport details confirmation',
          'CMR document generation',
          'Cargo verification at loading',
          'Document handover at delivery',
          'Digital copies via email/WhatsApp',
        ]

  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('coverage.title')}
            </h1>
            <p className="text-lg text-white/80">{t('coverage.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">
            {lang === 'ro' ? 'Țări acoperite' : 'Countries covered'}
          </h2>
          <CoverageCountriesList showLeadTimes />
        </div>
      </section>

      <section className="section bg-[var(--color-secondary-50)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">{t('coverage.leadTimes')}</h2>
              <p className="section-subtitle mb-6">
                {lang === 'ro'
                  ? 'Timpii estimați de livrare în funcție de destinație'
                  : 'Estimated delivery times by destination'}
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-[var(--color-secondary-200)]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center">
                      <span className="font-bold text-[var(--color-primary-600)]">RO</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{lang === 'ro' ? 'România' : 'Romania'}</h3>
                      <p className="text-[var(--color-secondary-500)] text-sm">
                        {lang === 'ro' ? 'Transport național' : 'Domestic transport'}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-[var(--color-primary-600)]">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{leadTimes.domestic}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[var(--color-secondary-200)]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center">
                      <span className="font-bold text-[var(--color-primary-600)]">HU</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{lang === 'ro' ? 'Ungaria' : 'Hungary'}</h3>
                      <p className="text-[var(--color-secondary-500)] text-sm">
                        {lang === 'ro' ? 'Rute principale' : 'Main routes'}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-[var(--color-primary-600)]">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{leadTimes.hungary}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[var(--color-secondary-200)]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center">
                      <span className="font-bold text-[var(--color-primary-600)]">PL</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{lang === 'ro' ? 'Polonia' : 'Poland'}</h3>
                      <p className="text-[var(--color-secondary-500)] text-sm">
                        {lang === 'ro' ? 'Rute regulate' : 'Regular routes'}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-[var(--color-primary-600)]">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{leadTimes.poland}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[var(--color-secondary-200)]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[var(--color-secondary-100)] rounded-full flex items-center justify-center">
                      <span className="font-bold text-[var(--color-secondary-600)]">EU</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {lang === 'ro' ? 'Alte țări UE' : 'Other EU countries'}
                      </h3>
                      <p className="text-[var(--color-secondary-500)] text-sm">
                        {lang === 'ro' ? 'La cerere' : 'On request'}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-[var(--color-secondary-500)]">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{leadTimes.other}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title">
                {lang === 'ro' ? 'Documentație și predare' : 'Documentation & handover'}
              </h2>
              <p className="section-subtitle mb-6">
                {lang === 'ro'
                  ? 'Gestionăm toată documentația necesară pentru transportul dumneavoastră'
                  : 'We handle all necessary documentation for your transport'}
              </p>
              <div className="bg-white rounded-xl p-6 border border-[var(--color-secondary-200)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[var(--color-primary-600)]" />
                  </div>
                  <h3 className="font-semibold">
                    {lang === 'ro' ? 'Procesul nostru' : 'Our process'}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {documentationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-[var(--color-primary-600)]">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-[var(--color-secondary-700)]">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <QuoteCTA />
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA variant="banner" />
    </>
  )
}
