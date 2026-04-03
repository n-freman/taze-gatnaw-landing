import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import logoLight from '../../assets/logos/logo-light.svg'
import styles from './Footer.module.css'

const sections = ['services', 'about', 'fleet', 'safety', 'geography', 'contact']

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={logoLight} alt="Täze Gatnaw" height="36" />
            <p className={styles.tagline}>{t('footer.tagline')}</p>
          </div>

          <nav className={styles.nav}>
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={styles.link}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>

        <div className={styles.divider} />

        <p className={styles.copyright}>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
