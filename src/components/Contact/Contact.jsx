import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import markWhite from '../../assets/logos/mark-white.svg'
import styles from './Contact.module.css'

const contactItems = [
  { key: 'address', Icon: MapPin },
  { key: 'phone', Icon: Phone },
  { key: 'email', Icon: Mail },
  { key: 'hours', Icon: Clock },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <AnimatedSection variant="fadeLeft" className={styles.brandCol}>
            <div className={styles.brandBg}>
              <img src={markWhite} alt="" className={styles.watermark} />
              <h2 className={styles.brandHeading}>{t('contact.heading')}</h2>
              <p className={styles.brandText}>{t('contact.description')}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeRight" className={styles.infoCol}>
            <div className={styles.infoList}>
              {contactItems.map(({ key, Icon }) => (
                <div key={key} className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Icon size={22} />
                  </div>
                  <span className={styles.infoText}>{t(`contact.${key}`)}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
