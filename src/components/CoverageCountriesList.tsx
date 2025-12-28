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
          className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${
            country.highlighted
              ? 'bg-white border-brand-orange/30 hover:border-brand-orange/50'
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              country.highlighted
                ? 'bg-brand-navy/10'
                : 'bg-gray-100'
            }`}
          >
            <span className={`text-lg font-bold ${country.highlighted ? 'text-brand-navy' : 'text-brand-gray'}`}>{country.code}</span>
          </div>
          <div>
            <p className="font-medium text-brand-navy">
              {country.name[lang]}
            </p>
            {showLeadTimes && (
              <p className="text-xs text-brand-orange flex items-center gap-1 font-medium">
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
            <MapPin className="w-4 h-4 text-brand-orange ml-auto" />
          )}
        </div>
      ))}
    </div>
  )
}
