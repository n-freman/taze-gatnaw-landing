import { useTranslation } from 'react-i18next'
import AnimatedSection from '../shared/AnimatedSection'
import CountUp from '../shared/CountUp'
import styles from './Fleet.module.css'

const stats = [
  { key: 'tankers', value: 120 },
  { key: 'trucks', value: 45 },
  { key: 'km', value: 3500 },
  { key: 'tons', value: 250000 },
]

export default function Fleet() {
  const { t } = useTranslation()

  return (
    <section id="fleet" className={styles.section}>
      <div className={styles.bgImage} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <AnimatedSection>
          <h2 className={styles.heading}>{t('fleet.heading')}</h2>
          <p className={styles.description}>{t('fleet.description')}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {stats.map(({ key, value }, i) => (
            <AnimatedSection key={key} variant="fadeUp" delay={i * 0.1}>
              <div className={styles.stat}>
                <div className={styles.statValue}>
                  <CountUp end={value} suffix="" />
                </div>
                <div className={styles.statLabel}>{t(`fleet.stats.${key}`)}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
