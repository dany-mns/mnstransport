import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { faqs } from '@/content/company'
import { ChevronDown } from 'lucide-react'

export function FAQAccordion() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const faqList = faqs[lang]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('faq.title')}</h2>
          <p className="section-subtitle mx-auto">{t('faq.subtitle')}</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-brand-navy">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-orange transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
