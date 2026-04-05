import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import useScrollSpy from '../../hooks/useScrollSpy'
import logoLight from '../../assets/logos/logo-light.svg'
import styles from './Navbar.module.css'

const sections = ['services', 'about', 'fleet', 'safety', 'geography', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sections, 120)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoLight} alt="Täze Gatnaw" height="40" />
        </a>

        <div className={styles.desktop}>
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.link} ${activeId === id ? styles.activeLink : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(id) }}
            >
              {t(`nav.${id}`)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {sections.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            className={styles.mobileLink}
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={(e) => { e.preventDefault(); handleNavClick(id) }}
          >
            {t(`nav.${id}`)}
          </a>
        ))}
        <div className={styles.mobileLang} style={{ animationDelay: `${sections.length * 0.05}s` }}>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
