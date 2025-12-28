import { useTranslation } from 'react-i18next'
import { testimonials } from '@/content/company'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle mx-auto">{t('testimonials.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-secondary-200)] relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[var(--color-primary-100)]" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--color-accent-400)] text-[var(--color-accent-400)]"
                  />
                ))}
              </div>
              <p className="text-[var(--color-secondary-700)] mb-4 italic">
                "{testimonial.text[lang]}"
              </p>
              <div className="border-t border-[var(--color-secondary-100)] pt-4">
                <p className="font-semibold text-[var(--color-secondary-900)]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[var(--color-secondary-500)]">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
