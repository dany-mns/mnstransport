import { useTranslation } from 'react-i18next'
import { process } from '@/content/company'
import {
  FileText,
  Calendar,
  Package,
  Truck,
  CheckCircle,
  FileCheck,
} from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Calendar,
  Package,
  Truck,
  CheckCircle,
  FileCheck,
}

export function ProcessTimeline() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const steps = process.steps[lang]

  return (
    <section className="section relative overflow-hidden">
      <div className="orb orb-blue w-[400px] h-[400px] top-20 left-0 opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white/80 mb-4">
            <FileText className="w-4 h-4 text-brand-orange" />
            {t('process.title')}
          </span>
          <h2 className="section-title">{t('process.title')}</h2>
          <p className="section-subtitle mx-auto">{t('process.subtitle')}</p>
        </AnimatedSection>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-[3.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step) => {
              const IconComponent = iconMap[step.icon]
              return (
                <StaggerItem key={step.step}>
                  <div className="card group h-full flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:glow-orange transition-all duration-500">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-brand-orange" />
                        )}
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-orange rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-brand-orange/30">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#8b95a5] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
