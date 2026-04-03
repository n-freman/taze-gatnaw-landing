import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

const languages = [
  { code: 'tk', label: 'TK' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className={styles.switcher}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          className={`${styles.btn} ${i18n.language === code ? styles.active : ''}`}
          onClick={() => i18n.changeLanguage(code)}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
