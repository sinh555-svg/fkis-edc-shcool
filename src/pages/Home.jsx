import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiHome,
  FiBook,
  FiActivity,
  FiMonitor,
  FiAward,
} from "react-icons/fi";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Counter from "../components/Counter.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import styles from "./Home.module.css";

const FEATURE_ICONS = {
  classrooms: FiHome,
  library: FiBook,
  scienceLab: FiActivity,
};


const NEWS_SEEDS = ["n1", "n2", "n3", "n4", "n5"];
const NEWS_IMAGES = {
  n1: "doctor.jpg",
  n2: "teacher-noch.jpg",
  n3: "teacher-chamroeum.jpg",
  n4: "teacher-chamroeum.jpg",
  n5: "teacher-chamroeum.jpg",
};

const TEACHERS = [
  {
    name: "Sery Danet",
    role: "Khmer Head Teacher",
    image: "/teacher-danet.jpg",
  },
  {
    name: "Phann SeryNoch",
    role: "Deputy Director",
    image: "/teacher-noch.jpg",
  },
  {
    name: "Eat Chamroeun",
    role: "Deputy Director",
    image: "teacher-chamroeum.jpg",
  },
  {
    name: "Thy Panha",
    role: "English Head Teacher",
    image: "/teacher-panha.jpg",
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("features.eyebrow")}</span>
            <h2>{t("features.title")}</h2>
            <p>{t("features.subtitle")}</p>
          </div>
          <div className={styles.featureGrid}>
            {Object.keys(FEATURE_ICONS).map((key, i) => {
              const Icon = FEATURE_ICONS[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Card className={styles.featureCard}>
                    <span className={styles.featureIcon}>
                      <Icon size={22} />
                    </span>
                    <h3>{t(`features.items.${key}.title`)}</h3>
                    <p>{t(`features.items.${key}.desc`)}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container" style={{ maxWidth: "1400" }}>
          <div className="section-head center">
            <span className="eyebrow">{t("gallery.eyebrow")}</span>
            <h2>{t("gallery.title")}</h2>
            <p>{t("gallery.subtitle")}</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="section">
        <div className="container">
          <div className={styles.principal}>
            <motion.div
              className={styles.principalImage}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="principal-hongsambath.jpg" alt={t("principal.name")} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="eyebrow">{t("principal.eyebrow")}</span>
              <h2 className={styles.principalQuote}>{t("principal.title")}</h2>
              <p>{t("principal.body")}</p>
              <div className={styles.principalName}>
                <strong>{t("principal.name")}</strong>
                <span>{t("principal.role")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ color: "#ffd166" }}>
              {t("stats.eyebrow")}
            </span>
            <h2 style={{ color: "#fff" }}>{t("stats.title")}</h2>
          </div>
          <div className={styles.statsGrid}>
            <Counter to={350} suffix="+" label={t("stats.items.students")} />
            <Counter to={79} suffix="+" label={t("stats.items.teachers")} />
            <Counter to={2} suffix="+" label={t("stats.items.years")} />
            <Counter to={98} suffix="%" label={t("stats.items.rate")} />
          </div>
        </div>
      </section>

     

      {/* TEACHERS */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our People</span>
            <h2>Meet Our Teachers</h2>
          </div>
          <div className={styles.teacherGrid}>
            {TEACHERS.map((teacher) => (
              <div
                key={teacher.name}
                className="card"
                style={{ textAlign: "center", padding: 0, overflow: "hidden" }}
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "17px", marginBottom: "4px" }}>
                    {teacher.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: "14px" }}>{teacher.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2>{t("cta.title")}</h2>
              <p>{t("cta.subtitle")}</p>
            </div>
            <Button to="/admission" variant="primary">
              {t("cta.button")}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
