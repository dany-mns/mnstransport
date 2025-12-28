import { useTranslation } from 'react-i18next'
import { testimonials } from '@/content/company'
import { Star, Quote } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

export function Testimonials() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'

  return (
    <section className="section relative overflow-hidden">
      <div className="orb orb-green w-[400px] h-[400px] bottom-20 right-0 opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white/80 mb-4">
            <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
            {t('testimonials.title')}
          </span>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle mx-auto">{t('testimonials.subtitle')}</p>
        </AnimatedSection>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="card group h-full">
                <div className="absolute top-4 right-4 w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:glow-orange transition-all duration-500">
                  <Quote className="w-4 h-4 text-brand-orange" />
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-orange text-brand-orange"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#a0aec0] mb-4 italic leading-relaxed">
                  "{testimonial.text[lang]}"
                </p>
                <div className="border-t border-white/5 pt-4 flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-full flex items-center justify-center text-white font-display font-bold text-sm shadow-lg shadow-brand-orange/30">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#8b95a5]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
