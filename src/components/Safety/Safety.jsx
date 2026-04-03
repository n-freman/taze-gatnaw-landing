import { useTranslation } from 'react-i18next'
import { Eye, Award, GraduationCap, ShieldAlert } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import styles from './Safety.module.css'

const items = [
  { key: 'monitoring', Icon: Eye },
  { key: 'certified', Icon: Award },
  { key: 'training', Icon: GraduationCap },
  { key: 'emergency', Icon: ShieldAlert },
]

export default function Safety() {
  const { t } = useTranslation()

  return (
    <section id="safety" className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <h2 className={styles.heading}>{t('safety.heading')}</h2>
          <p className={styles.description}>{t('safety.description')}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {items.map(({ key, Icon }, i) => (
            <AnimatedSection key={key} variant="fadeUp" delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={28} />
                </div>
                <h3 className={styles.cardTitle}>{t(`safety.items.${key}.title`)}</h3>
                <p className={styles.cardText}>{t(`safety.items.${key}.description`)}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
