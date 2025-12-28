import { useTranslation } from 'react-i18next'
import { coverage } from '@/content/company'
import { MapPin, Clock } from 'lucide-react'

interface CoverageCountriesListProps {
  showLeadTimes?: boolean
  className?: string
}

export function CoverageCountriesList({ showLeadTimes = false, className = '' }: CoverageCountriesListProps) {
  const { i18n } = useTranslation()
  const lang = i18n.language as 'ro' | 'en'
  const leadTimes = coverage.leadTimes[lang]

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {coverage.countries.map((country) => (
        <div
          key={country.code}
          className={`flex items-center gap-3 p-4 rounded-lg border transition-colors ${
            country.highlighted
              ? 'bg-[var(--color-primary-50)] border-[var(--color-primary-200)]'
              : 'bg-white border-[var(--color-secondary-200)]'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              country.highlighted
                ? 'bg-[var(--color-primary-100)]'
                : 'bg-[var(--color-secondary-100)]'
            }`}
          >
            <span className="text-lg font-bold">{country.code}</span>
          </div>
          <div>
            <p className="font-medium text-[var(--color-secondary-900)]">
              {country.name[lang]}
            </p>
            {showLeadTimes && (
              <p className="text-xs text-[var(--color-secondary-500)] flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {country.code === 'RO'
                  ? leadTimes.domestic
                  : country.code === 'HU'
                  ? leadTimes.hungary
                  : country.code === 'PL'
                  ? leadTimes.poland
                  : leadTimes.other}
              </p>
            )}
          </div>
          {country.highlighted && (
            <MapPin className="w-4 h-4 text-[var(--color-primary-500)] ml-auto" />
          )}
        </div>
      ))}
    </div>
  )
}
