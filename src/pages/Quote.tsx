import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Package,
  User,
} from 'lucide-react'
import { company, coverage } from '@/content/company'
import { ResponseSLAChip } from '@/components/ResponseSLAChip'
import { InsuranceBadge } from '@/components/InsuranceBadge'

const quoteSchema = z.object({
  pickupCountry: z.string().min(1),
  pickupCity: z.string().min(1),
  deliveryCountry: z.string().min(1),
  deliveryCity: z.string().min(1),
  pickupDate: z.string().optional(),
  flexible: z.boolean().optional(),
  cargoType: z.string().optional(),
  pallets: z.string().optional(),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  notes: z.string().optional(),
  loadingSide: z.boolean().optional(),
  loadingTop: z.boolean().optional(),
  loadingRear: z.boolean().optional(),
  name: z.string().min(1),
  company: z.string().optional(),
  phone: z.string().min(1),
  email: z.string().email(),
})

type QuoteFormData = z.infer<typeof quoteSchema>

export function Quote() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const countries = coverage.countries.map((c) => ({
    code: c.code,
    name: c.name[lang],
  }))

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = []
    if (step === 1) {
      fieldsToValidate = ['pickupCountry', 'pickupCity', 'deliveryCountry', 'deliveryCity']
    }
    const isValid = await trigger(fieldsToValidate)
    if (isValid) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const onSubmit = async (data: QuoteFormData) => {
    console.log('Quote form submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <section className="gradient-bg py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('quote.title')}
              </h1>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-secondary-900)] mb-4">
                {t('quote.success')}
              </h2>
              <p className="text-lg text-[var(--color-secondary-600)] mb-8">
                {t('quote.successMessage')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${company.contact.phoneClean}`} className="btn btn-primary">
                  <Phone className="w-5 h-5" />
                  {company.contact.phone}
                </a>
                <a
                  href={`https://wa.me/${company.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('quote.title')}
            </h1>
            <p className="text-lg text-white/80">{t('quote.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      s === step
                        ? 'bg-[var(--color-primary-600)] text-white'
                        : s < step
                        ? 'bg-green-500 text-white'
                        : 'bg-[var(--color-secondary-200)] text-[var(--color-secondary-500)]'
                    }`}
                  >
                    {s < step ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium hidden sm:inline ${
                      s === step
                        ? 'text-[var(--color-primary-600)]'
                        : 'text-[var(--color-secondary-500)]'
                    }`}
                  >
                    {s === 1 ? t('quote.step1') : s === 2 ? t('quote.step2') : t('quote.step3')}
                  </span>
                  {s < 3 && (
                    <div className="w-8 sm:w-16 h-0.5 bg-[var(--color-secondary-200)] mx-2" />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="bg-white rounded-xl border border-[var(--color-secondary-200)] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--color-primary-600)]" />
                    </div>
                    <h2 className="text-xl font-semibold">{t('quote.step1')}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-[var(--color-secondary-700)] mb-4">
                        {lang === 'ro' ? 'Punct ridicare' : 'Pickup point'}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                            {t('quote.pickupCountry')} *
                          </label>
                          <select
                            {...register('pickupCountry')}
                            className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                          >
                            <option value="">{lang === 'ro' ? 'Selectează' : 'Select'}</option>
                            {countries.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                          {errors.pickupCountry && (
                            <p className="text-red-500 text-sm mt-1">{t('quote.required')}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                            {t('quote.pickupCity')} *
                          </label>
                          <input
                            type="text"
                            {...register('pickupCity')}
                            className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                          />
                          {errors.pickupCity && (
                            <p className="text-red-500 text-sm mt-1">{t('quote.required')}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-[var(--color-secondary-700)] mb-4">
                        {lang === 'ro' ? 'Punct livrare' : 'Delivery point'}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                            {t('quote.deliveryCountry')} *
                          </label>
                          <select
                            {...register('deliveryCountry')}
                            className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                          >
                            <option value="">{lang === 'ro' ? 'Selectează' : 'Select'}</option>
                            {countries.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                          {errors.deliveryCountry && (
                            <p className="text-red-500 text-sm mt-1">{t('quote.required')}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                            {t('quote.deliveryCity')} *
                          </label>
                          <input
                            type="text"
                            {...register('deliveryCity')}
                            className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                          />
                          {errors.deliveryCity && (
                            <p className="text-red-500 text-sm mt-1">{t('quote.required')}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.pickupDate')}
                      </label>
                      <input
                        type="date"
                        {...register('pickupDate')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                    </div>
                    <div className="flex items-end">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('flexible')}
                          className="w-5 h-5 rounded border-[var(--color-secondary-300)] text-[var(--color-primary-600)]"
                        />
                        <span className="text-[var(--color-secondary-700)]">
                          {t('quote.flexible')}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-xl border border-[var(--color-secondary-200)] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-[var(--color-primary-600)]" />
                    </div>
                    <h2 className="text-xl font-semibold">{t('quote.step2')}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.cargoType')}
                      </label>
                      <input
                        type="text"
                        {...register('cargoType')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.pallets')}
                      </label>
                      <input
                        type="number"
                        {...register('pallets')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.weight')}
                      </label>
                      <input
                        type="text"
                        {...register('weight')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.dimensions')}
                      </label>
                      <input
                        type="text"
                        {...register('dimensions')}
                        placeholder="ex: 120x80x100 cm"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-2">
                      {t('quote.loadingType')}
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('loadingSide')}
                          className="w-5 h-5 rounded border-[var(--color-secondary-300)] text-[var(--color-primary-600)]"
                        />
                        <span className="text-[var(--color-secondary-700)]">
                          {t('quote.loadingSide')}
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('loadingTop')}
                          className="w-5 h-5 rounded border-[var(--color-secondary-300)] text-[var(--color-primary-600)]"
                        />
                        <span className="text-[var(--color-secondary-700)]">
                          {t('quote.loadingTop')}
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('loadingRear')}
                          className="w-5 h-5 rounded border-[var(--color-secondary-300)] text-[var(--color-primary-600)]"
                        />
                        <span className="text-[var(--color-secondary-700)]">
                          {t('quote.loadingRear')}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                      {t('quote.notes')}
                    </label>
                    <textarea
                      {...register('notes')}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none resize-none"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="bg-white rounded-xl border border-[var(--color-secondary-200)] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-[var(--color-primary-600)]" />
                    </div>
                    <h2 className="text-xl font-semibold">{t('quote.step3')}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.name')} *
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{t('quote.required')}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.company')}
                      </label>
                      <input
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.phone')} *
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{t('quote.required')}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary-700)] mb-1">
                        {t('quote.email')} *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-secondary-300)] focus:border-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-200)] outline-none"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{t('quote.required')}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <ResponseSLAChip />
                    <InsuranceBadge variant="compact" />
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 ? (
                  <button type="button" onClick={prevStep} className="btn btn-secondary">
                    <ArrowLeft className="w-4 h-4" />
                    {t('quote.prev')}
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button type="button" onClick={nextStep} className="btn btn-primary">
                    {t('quote.next')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-accent">
                    {t('quote.submit')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
