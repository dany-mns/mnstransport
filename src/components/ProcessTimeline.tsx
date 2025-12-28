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
    <section className="section bg-[var(--color-secondary-50)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('process.title')}</h2>
          <p className="section-subtitle mx-auto">{t('process.subtitle')}</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-primary-200)] -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step) => {
              const IconComponent = iconMap[step.icon]
              return (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--color-secondary-200)] h-full flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mb-4 relative z-10">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-[var(--color-primary-600)]" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-primary-600)] mb-2">
                      {lang === 'ro' ? `PASUL ${step.step}` : `STEP ${step.step}`}
                    </span>
                    <h3 className="font-semibold text-[var(--color-secondary-900)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--color-secondary-600)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
