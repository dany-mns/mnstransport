import { useTranslation } from 'react-i18next'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react'
import { company } from '@/content/company'
import { ResponseSLAChip } from '@/components/ResponseSLAChip'
import { InsuranceBadge } from '@/components/InsuranceBadge'

export function Contact() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'

  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-white/80">{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <a
                  href={`tel:${company.contact.phoneClean}`}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[var(--color-secondary-200)] hover:border-[var(--color-primary-300)] hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-secondary-500)]">{t('contact.phone')}</p>
                    <p className="text-xl font-semibold text-[var(--color-secondary-900)]">
                      {company.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${company.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[var(--color-secondary-200)] hover:border-green-300 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-secondary-500)]">{t('contact.whatsapp')}</p>
                    <p className="text-xl font-semibold text-[var(--color-secondary-900)]">
                      {company.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[var(--color-secondary-200)] hover:border-[var(--color-primary-300)] hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-[var(--color-primary-100)] rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-secondary-500)]">{t('contact.email')}</p>
                    <p className="text-xl font-semibold text-[var(--color-secondary-900)]">
                      {company.contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[var(--color-secondary-200)]">
                  <div className="w-14 h-14 bg-[var(--color-secondary-100)] rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-[var(--color-secondary-600)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-secondary-500)]">{t('contact.address')}</p>
                    <p className="text-[var(--color-secondary-900)]">
                      {company.contact.address[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[var(--color-secondary-200)]">
                  <div className="w-14 h-14 bg-[var(--color-secondary-100)] rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-[var(--color-secondary-600)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-secondary-500)]">{t('contact.hours')}</p>
                    <p className="text-[var(--color-secondary-900)]">
                      {company.businessHours[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl border border-[var(--color-secondary-200)] p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-[var(--color-primary-600)]" />
                  </div>
                  <h2 className="text-xl font-semibold">{t('contact.sendDocs')}</h2>
                </div>
                <p className="text-[var(--color-secondary-600)] mb-6">
                  {t('contact.sendDocsDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(
                      lang === 'ro'
                        ? 'Bună ziua, doresc să trimit documente pentru transport.'
                        : 'Hello, I would like to send documents for transport.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp flex-1"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${company.contact.email}?subject=${encodeURIComponent(
                      lang === 'ro' ? 'Documente transport' : 'Transport documents'
                    )}`}
                    className="btn btn-secondary flex-1"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <ResponseSLAChip className="w-full justify-center py-3" />
                <InsuranceBadge />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
