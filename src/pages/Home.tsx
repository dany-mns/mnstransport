import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Phone,
  MapPin,
  Globe,
  Target,
  Calendar,
  Headphones,
  Radar,
  Truck,
  ChevronDown,
  MessageCircle,
} from 'lucide-react'
import { company, services, fleet, coverage } from '@/content/company'
import { TrustStatsBar } from '@/components/TrustStatsBar'
import { ProcessTimeline } from '@/components/ProcessTimeline'
import { Testimonials } from '@/components/Testimonials'
import { ResponseSLAChip } from '@/components/ResponseSLAChip'
import { InsuranceBadge } from '@/components/InsuranceBadge'
import { LiveTrackingFeature } from '@/components/LiveTrackingFeature'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection'

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
    <div className="bg-brand-navy">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./public/background.png" 
            alt="Transport trucks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/50" />
        </div>
        <div className="orb orb-orange w-[600px] h-[600px] -top-40 -right-40 opacity-40" />
        <div className="orb orb-blue w-[500px] h-[500px] bottom-0 -left-40 opacity-30" />
        <div className="absolute inset-0 noise" />
        
        <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-6 justify-center"
            >
              <ResponseSLAChip />
              <InsuranceBadge variant="compact" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-balance"
            >
              <span className="gradient-text">{t('hero.title').split(' ').slice(0, 2).join(' ')}</span>
              <br />
              <span className="gradient-text-orange">{t('hero.title').split(' ').slice(2).join(' ')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-[#8b95a5] mb-10 max-w-xl mx-auto leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={`tel:${company.contact.phoneClean}`}
                className="btn btn-primary text-lg py-5 px-10 group"
              >
                <Phone className="w-5 h-5" />
                {t('hero.ctaSecondary')}
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-lg py-5 px-10 group"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-widest">{lang === 'ro' ? 'Derulează' : 'Scroll'}</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      <TrustStatsBar />

      <section id="services" className="section relative overflow-hidden">
        <div className="orb orb-orange w-[400px] h-[400px] top-20 right-0 opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white/80 mb-4">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              {t('services.title')}
            </span>
            <h2 className="section-title text-center mx-auto">{t('services.title')}</h2>
            <p className="section-subtitle mx-auto text-center">{t('services.subtitle')}</p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesList.map((service) => {
              const IconComponent = iconMap[service.icon]
              return (
                <StaggerItem key={service.id}>
                  <div className="card group h-full">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-4 group-hover:glow-orange transition-all duration-500">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-brand-orange" />
                      )}
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#8b95a5] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <div className="divider-gradient" />

      <ProcessTimeline />

      <div className="divider-gradient" />

      <section id="fleet" className="section relative overflow-hidden">
        <div className="orb orb-blue w-[500px] h-[500px] bottom-0 left-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white/80 mb-4">
                <Truck className="w-4 h-4 text-brand-orange" />
                {t('fleet.title')}
              </span>
              <h2 className="section-title text-left">{t('fleet.title')}</h2>
              <p className="section-subtitle mb-8">{t('fleet.subtitle')}</p>
              
              <div className="glass rounded-2xl p-6 mb-8">
                <h3 className="font-display font-bold text-xl text-white mb-6">{vehicleType}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(fleet.vehicles[0].specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 px-4 bg-white/[0.02] rounded-xl border border-white/5">
                      <span className="text-[#8b95a5] capitalize text-sm">{key}</span>
                      <span className="font-semibold text-white text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="space-y-4">
              <LiveTrackingFeature />
              <InsuranceBadge />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      <section id="coverage" className="section relative overflow-hidden">
        <div className="orb orb-orange w-[400px] h-[400px] top-40 right-20 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white/80 mb-4">
              <Globe className="w-4 h-4 text-brand-orange" />
              {t('coverage.title')}
            </span>
            <h2 className="section-title">{t('coverage.title')}</h2>
            <p className="section-subtitle mx-auto">{t('coverage.subtitle')}</p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverage.countries.filter((c) => c.highlighted).map((country) => (
              <StaggerItem key={country.code}>
                <div className="card group h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:glow-orange transition-all duration-500">
                      <span className="text-lg font-display font-bold text-white group-hover:text-brand-orange transition-colors">
                        {country.code}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{country.name[lang]}</h3>
                      <p className="text-xs text-brand-orange font-semibold">
                        {country.code === 'RO'
                          ? coverage.leadTimes[lang].domestic
                          : country.code === 'HU'
                          ? coverage.leadTimes[lang].hungary
                          : coverage.leadTimes[lang].poland}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#8b95a5] leading-relaxed">
                    {country.code === 'RO'
                      ? lang === 'ro'
                        ? 'Acoperire completă pe tot teritoriul României'
                        : 'Complete coverage across Romania'
                      : lang === 'ro'
                      ? 'Rute regulate și transport dedicat'
                      : 'Regular routes and dedicated transport'}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="divider-gradient" />

      <div id="contact">
        <Testimonials />
      </div>
    </div>
  )
}
