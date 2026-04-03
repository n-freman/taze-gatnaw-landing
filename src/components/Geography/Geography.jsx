import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { MapPin } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import styles from './Geography.module.css'

const route1 = "M30,160 Q150,40 300,100 T570,60"
const route2 = "M50,80 Q200,170 350,120 T560,150"

export default function Geography() {
  const { t } = useTranslation()
  const cities = t('geography.cities', { returnObjects: true })
  const [svgRef, svgInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="geography" className={styles.section}>
      <div className={styles.bgImage} style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/geography.jpg)` }} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <AnimatedSection>
          <h2 className={styles.heading}>{t('geography.heading')}</h2>
          <p className={styles.description}>{t('geography.description')}</p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className={styles.cities}>
            {cities.map((city, i) => (
              <div key={i} className={styles.cityChip}>
                <MapPin size={16} />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className={styles.routeVisual} ref={svgRef}>
          <svg viewBox="0 0 600 200" className={styles.routeSvg} aria-hidden="true">
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Static faint base paths */}
            <path d={route1} fill="none" stroke="var(--color-primary)" strokeWidth="1" opacity="0.1" />
            <path d={route2} fill="none" stroke="var(--color-primary)" strokeWidth="1" opacity="0.1" />

            {/* Animated drawing paths */}
            <path
              d={route1}
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="2"
              className={`${styles.routePath} ${svgInView ? styles.draw : ''}`}
              style={{ animationDelay: '0s' }}
            />
            <path
              d={route2}
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="2"
              className={`${styles.routePath} ${svgInView ? styles.draw : ''}`}
              style={{ animationDelay: '0.5s' }}
            />

            {/* Station dots — fade in after paths draw */}
            {[
              [30, 160], [150, 78], [300, 100], [430, 72], [570, 60],
              [50, 80], [200, 145], [350, 120], [560, 150],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="5"
                fill="var(--color-primary)"
                className={`${styles.dot} ${svgInView ? styles.dotVisible : ''}`}
                style={{ animationDelay: `${1.2 + i * 0.1}s` }}
              />
            ))}

            {/* Traveling dots along paths */}
            {svgInView && (
              <>
                <circle r="3" fill="#fff" opacity="0.9">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#route1" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#fff" opacity="0.9">
                  <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
                    <mpath href="#route2" />
                  </animateMotion>
                </circle>
              </>
            )}

            {/* Hidden paths for animateMotion reference */}
            <path id="route1" d={route1} fill="none" stroke="none" />
            <path id="route2" d={route2} fill="none" stroke="none" />
          </svg>
        </div>
      </div>
    </section>
  )
}
