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
       
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
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

      {/* CURRICULUM FRAMEWORK */}
<section id="curriculum-framework" style={{ background: "var(--white)" }}>
  <div className="container">
    <div className="section-head center">
      <h3 style={{ color: "#f10707" }}>Our Curriculum Framework</h3>
    </div>
    <img
      src="/7lsa.png"
      alt="7 Learning Areas - Montessori Curriculum Framework"
      className={styles.curriculumFrameworkImg}
    />
  </div>
</section>

{/* PROGRAM HIGHLIGHTS */}
<section id="programs" className="section">
  <div className="container">
    <div className="section-head center">
      <h2 style={{ color: "#f01010" }}>Program</h2>
      <p>A safe and happy place where young children learn by playing and exploring.</p>
    </div>
    <div className={styles.programHighlightWrap}>

      <div className={styles.programHighlightRow}>
        <img src="/f6.jpg" alt="Holistic Growth" className={styles.programHighlightImg} />
        <div>
          <h3>Holistic Growth</h3>
          <p>Helps children develop their body, mind, and senses through play.</p>
        </div>
      </div>

      <div className={styles.programHighlightRow}>
        <img src="/f11.jpg" alt="Early Independence" className={styles.programHighlightImg} />
        <div>
          <h3>Early Independence</h3>
          <p>Encourages children to be independent and confident.</p>
        </div>
      </div>

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
     <section id="activities" className="section">
        <div className="container">
          <div className="section-head center">
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
     <section id="schedule" 
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
                <span className={styles.scheduleActivity}>{row.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
