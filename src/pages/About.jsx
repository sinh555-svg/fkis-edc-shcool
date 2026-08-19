import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {  FiBook,  FiMap, FiHome, FiTarget, FiHeart, FiSun,} from "react-icons/fi";
import Card from "../components/Card.jsx";
import styles from "./About.module.css";

const VALUE_KEYS = ["respect", "curiosity", "integrity", "resilience"];
const FACILITY_ICONS = {
  library: FiBook, labs: FiMap, auditorium: FiHome,
  field: FiTarget, clinic: FiHeart, cafeteria: FiSun,
}


export default function About() {
  const { t } = useTranslation();
  const timeline = t("about.timeline.items", { returnObjects: true });

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="eyebrow" style={{ color: "#ffd166" }}>
            {t("about.hero.eyebrow")}
          </span>
          <h1 className={styles.pageTitle}>{t("about.hero.title")}</h1>
          <p className={styles.pageSubtitle}>{t("about.hero.subtitle")}</p>
        </div>
       
      </section>

      {/* HISTORY */}
      <section className="section">
        <div className="container">
          <div className={styles.split}>
            <motion.img
              src="school-history.jpg"
              alt=""
              className={styles.historyImg}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <span className="eyebrow">{t("about.history.eyebrow")}</span>
              <h2>{t("about.history.title")}</h2>
              <p>{t("about.history.body")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className={styles.mvGrid}>
            <Card>
              <h3>{t("about.mission.title")}</h3>
              <p>{t("about.mission.body")}</p>
            </Card>
            <Card>
              <h3>{t("about.vision.title")}</h3>
              <p>{t("about.vision.body")}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("about.values.eyebrow")}</span>
            <h2>{t("about.values.title")}</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUE_KEYS.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card>
                  <span className={styles.valueNum}>0{i + 1}</span>
                  <h3>{t(`about.values.items.${key}.title`)}</h3>
                  <p>{t(`about.values.items.${key}.desc`)}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("about.facilities.eyebrow")}</span>
            <h2>{t("about.facilities.title")}</h2>
          </div>
          <div className={styles.facilitiesGrid}>
            {Object.keys(FACILITY_ICONS).map((key) => {
              const Icon = FACILITY_ICONS[key];
              return (
                <div key={key} className={styles.facilityItem}>
                  <Icon size={20} />
                  <span>{t(`about.facilities.items.${key}`)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("about.timeline.eyebrow")}</span>
            <h2>{t("about.timeline.title")}</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className={styles.timelineYear}>{item.year}</span>
                <span className={styles.timelineDot} />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className={styles.split}>
            <div>
              <span className="eyebrow">
                {t("about.principalPhoto.eyebrow")}
              </span>
              <h2>{t("about.principalPhoto.title")}</h2>
              <p>{t("about.principalPhoto.body")}</p>
            </div>
            <motion.img
              src="t-w-s.png"
              alt=""
              className={styles.historyImg}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
