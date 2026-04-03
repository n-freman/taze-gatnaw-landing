import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={styles.bgImage} />

      <div className={styles.overlay} />

      <div className={styles.accent}>
        <div className={styles.accentLine} />
        <div className={styles.accentLine2} />
      </div>

      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.a
          href="#contact"
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {t('hero.cta')}
        </motion.a>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
