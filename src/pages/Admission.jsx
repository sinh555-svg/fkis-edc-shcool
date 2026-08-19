import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiCheckCircle, FiDownload } from "react-icons/fi";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import styles from "./Admission.module.css";

const REQ_KEYS = [
  "birthCert",
  "reportCard",
  "photo",
  "healthRecord",
  "interview",
];
const STEP_KEYS = ["step1", "step2", "step3", "step4"];
const TUITION_KEYS = ["kindergarten", "Nursery", "secondary", "highschool"];

export default function Admission() {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="eyebrow" style={{ color: "#ffd166" }}>
            {t("admission.hero.eyebrow")}
          </span>
          <h1 className={styles.pageTitle}>{t("admission.hero.title")}</h1>
          <p className={styles.pageSubtitle}>{t("admission.hero.subtitle")}</p>
          <Button to="#form" variant="primary">
            {t("nav.applyNow")}
          </Button>
        </div>
       
      </section>

      {/* REQUIREMENTS */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">
              {t("admission.requirements.eyebrow")}
            </span>
            <h2>{t("admission.requirements.title")}</h2>
          </div>
          <div className={styles.reqList}>
            {REQ_KEYS.map((key) => (
              <div key={key} className={styles.reqItem}>
                <FiCheckCircle size={20} />
                <span>{t(`admission.requirements.items.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("admission.process.eyebrow")}</span>
            <h2>{t("admission.process.title")}</h2>
          </div>
          <div className={styles.stepGrid}>
            {STEP_KEYS.map((key, i) => (
              <motion.div
                key={key}
                className={styles.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className={styles.stepNum}>{i + 1}</span>
                <h3>{t(`admission.process.steps.${key}.title`)}</h3>
                <p>{t(`admission.process.steps.${key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TUITION */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("admission.tuition.eyebrow")}</span>
            <h2>{t("admission.tuition.title")}</h2>
            <p>{t("admission.tuition.note")}</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign:"center",
            }}
          >
            <img
              src="QR.png"
              alt=""
              style={{
                width: "50%",
                borderRadius: "18px",
                textAlign:"center",
                boxShadow: "0 6px 20px -6px rgba(11,37,69,0.14)",
              }}
            />
            <img
              src="free1w.jpg"
              alt=""
              style={{
                width: "50%",
                borderRadius: "18px",
                boxShadow: "0 6px 20px -6px rgba(11,37,69,0.14)",
              }}
            />
          </div>
        </div>
      </section>
      {/* SCHOLARSHIPS */}
      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className={styles.scholarship}>
            <div>
              <span className="eyebrow">
                {t("admission.scholarships.eyebrow")}
              </span>
              <h2>{t("admission.scholarships.title")}</h2>
              <p>{t("admission.scholarships.body")}</p>
            </div>
            <img src="all-s.jpg" alt="" className={styles.scholarshipImg} />
          </div>
        </div>
      </section>

      {/* DOWNLOAD FORM */}
      <section className="section" id="form">
        <div className="container">
          <Card className={styles.downloadCard}>
            <div>
              <h3>{t("admission.form.title")}</h3>
              <p>{t("admission.form.body")}</p>
            </div>
            <Button href="/application-form.pdf" variant="secondary">
              <FiDownload size={16} /> {t("admission.form.download")}
            </Button>
          </Card>
        </div>
      </section>

      {/* APPLY BANNER */}
      <section className={styles.applyBanner}>
        <div className="container">
          <div className={styles.applyBox}>
            <div>
              <h2>{t("admission.applyBanner.title")}</h2>
              <p>{t("admission.applyBanner.subtitle")}</p>
            </div>
            <Button to="/contact" variant="primary">
              {t("admission.applyBanner.button")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
