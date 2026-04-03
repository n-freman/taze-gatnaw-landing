import { useTranslation } from 'react-i18next'
import { Train, Truck } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import styles from './Services.module.css'

const services = [
  { key: 'rail', Icon: Train, image: '/images/services-rail.jpg' },
  { key: 'truck', Icon: Truck, image: '/images/services-truck.jpg' },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <h2 className={styles.heading}>{t('services.heading')}</h2>
          <p className={styles.description}>{t('services.description')}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {services.map(({ key, Icon, image }, i) => (
            <AnimatedSection key={key} variant="fadeUp" delay={i * 0.15}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={image} alt={t(`services.${key}.title`)} loading="lazy" />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrap}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>{t(`services.${key}.title`)}</h3>
                  <p className={styles.cardText}>{t(`services.${key}.description`)}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
