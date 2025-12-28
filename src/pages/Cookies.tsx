import { useTranslation } from 'react-i18next'
import { legal } from '@/content/company'

export function Cookies() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'

  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('legal.cookiesTitle')}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-white rounded-xl border border-[var(--color-secondary-200)] p-6 md:p-8">
              <pre className="whitespace-pre-wrap font-sans text-[var(--color-secondary-700)] leading-relaxed">
                {legal.cookies[lang]}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
