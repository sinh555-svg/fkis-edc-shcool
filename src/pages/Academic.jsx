import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiLayers, FiUsers, FiCpu, FiRepeat, FiClock } from 'react-icons/fi'
import Card from '../components/Card.jsx'
import styles from './Academic.module.css'

const PROGRAM_KEYS = ['kindergarten', 'primary', 'PreSchool']
const DEPT_KEYS = ['languages']
const METHOD_KEYS = ['projectBased', 'smallGroups', 'technology', 'assessment']
const METHOD_ICONS = { projectBased: FiLayers, smallGroups: FiUsers, technology: FiCpu, assessment: FiRepeat }
const ACTIVITY_KEYS = ['robotics', 'debate', 'art', 'music', 'football', 'volunteer']

export default function Academic() {
  const { t } = useTranslation()
  const schedule = t('academic.schedule.items', { returnObjects: true })

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="eyebrow" style={{ color: "#ffd166" }}>
            {t("academic.hero.eyebrow")}
          </span>
          <h1 className={styles.pageTitle}>{t("academic.hero.title")}</h1>
          <p className={styles.pageSubtitle}>{t("academic.hero.subtitle")}</p>
        </div>
        <svg
          className="sunrise-divider"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 60 L0 34 Q150 4 300 34 Q450 60 600 34 Q750 4 900 34 Q1050 60 1200 34 L1200 60 Z"
            fill="#e6f2ff"
          />
        </svg>
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("academic.programs.eyebrow")}</span>
            <h2>{t("academic.programs.title")}</h2>
          </div>
          <div className={styles.programGrid}>
            {PROGRAM_KEYS.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card className={styles.programCard}>
                  <span className={styles.programAge}>
                    {t(`academic.programs.items.${key}.ages`)}
                  </span>
                  <h3>{t(`academic.programs.items.${key}.title`)}</h3>
                  <p>{t(`academic.programs.items.${key}.desc`)}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("academic.departments.eyebrow")}</span>
            <h2>{t("academic.departments.title")}</h2>
          </div>
          <div className={styles.pillGrid}>
            {DEPT_KEYS.map((key) => {
              const text = t(`academic.departments.items.${key}`)
              return (
                <span key={key} className={`${styles.pill} ${!text ? styles.pillEmpty : ''}`}>
                  {text}
                </span>
              )
            })}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section">
        <div className="container">
          <div className={styles.curriculum}>
            <div>
              <span className="eyebrow">
                {t("academic.curriculum.eyebrow")}
              </span>
              <h2>{t("academic.curriculum.title")}</h2>
              <p>{t("academic.curriculum.body")}</p>
            </div>
            <img src="hs5.png" alt="" className={styles.curriculumImg} />
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("academic.methods.eyebrow")}</span>
            <h2>{t("academic.methods.title")}</h2>
          </div>
          <div className={styles.methodGrid}>
            {METHOD_KEYS.map((key) => {
              const Icon = METHOD_ICONS[key];
              return (
                <Card key={key} className={styles.methodCard}>
                  <span className={styles.methodIcon}>
                    <Icon size={20} />
                  </span>
                  <h3>{t(`academic.methods.items.${key}.title`)}</h3>
                  <p>{t(`academic.methods.items.${key}.desc`)}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("academic.activities.eyebrow")}</span>
            <h2>{t("academic.activities.title")}</h2>
          </div>
          <div className={styles.videoWrap}>
            <iframe
              width="100%"
              height="100%"
              src="activities-video.mp4"
              title="Activities & Clubs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              <FiClock size={13} style={{ marginRight: 4 }} />
              {t("academic.schedule.eyebrow")}
            </span>
            <h2>{t("academic.schedule.title")}</h2>
          </div>
          <div className={styles.schedule}>
            {schedule.map((row) => (
              <div key={row.time} className={styles.scheduleRow}>
                <span className={styles.scheduleTime}>{row.time}</span>
                <span>{row.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
