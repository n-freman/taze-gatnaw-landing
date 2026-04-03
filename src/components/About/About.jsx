import { useTranslation } from 'react-i18next'
import AnimatedSection from '../shared/AnimatedSection'
import CountUp from '../shared/CountUp'
import styles from './About.module.css'

const statValues = [
  { key: 'experience', value: 10 },
  { key: 'deliveries', value: 5000 },
  { key: 'clients', value: 150 },
  { key: 'routes', value: 40 },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <AnimatedSection variant="fadeLeft" className={styles.textCol}>
            <div className={styles.headingWrap}>
              <div className={styles.accentBar} />
              <h2 className={styles.heading}>{t('about.heading')}</h2>
            </div>
            <p className={styles.text}>{t('about.text')}</p>
            <p className={styles.text}>{t('about.text2')}</p>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight" className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <img src={`${import.meta.env.BASE_URL}images/about.jpg`} alt={t('about.heading')} loading="lazy" />
            </div>
          </AnimatedSection>
        </div>

        <div className={styles.stats}>
          {statValues.map(({ key, value }, i) => (
            <AnimatedSection key={key} variant="fadeUp" delay={i * 0.1} className={styles.stat}>
              <div className={styles.statValue}>
                <CountUp end={value} />
              </div>
              <div className={styles.statLabel}>{t(`about.stats.${key}`)}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
