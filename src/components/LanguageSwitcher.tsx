import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ro' ? 'en' : 'ro'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-[var(--color-secondary-100)] transition-colors text-sm font-medium text-[var(--color-secondary-700)]"
      aria-label="Change language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{i18n.language === 'ro' ? 'EN' : 'RO'}</span>
    </button>
  )
}
