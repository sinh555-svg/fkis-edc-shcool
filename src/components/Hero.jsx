// Hero banner: photographic background + the signature sunrise-arc
// SVG, animated title, and the two primary CTAs from the brief.
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Button from './Button.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={styles.bg} style={{ backgroundImage: "url('/hero-bg.png')" }} />
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.eyebrow')}
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button to="/about" variant="secondary">{t('hero.learnMore')}</Button>
          <Button to="/admission" variant="primary">{t('hero.applyNow')}</Button>
        </motion.div>
      </div>

      <svg className={styles.arc} viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90 L0 50 Q150 10 300 50 Q450 90 600 50 Q750 10 900 50 Q1050 90 1200 50 L1200 90 Z" fill="#e6f2ff" />
      </svg>
    </section>
  )
}
