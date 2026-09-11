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
      <section id="history" className="section">
        <div className="container">
          <div className={styles.split}>
            <motion.img
              src="school-history1.jpg"
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
              {t("about.history.body", { returnObjects: true }).map((para, i) => (
  <p key={i}>{para}</p>
))}
            </div>
          </div>
        </div>
      </section>

   {/* WHY CHOOSE US */}
<section id="why-choose-us"
  className="section section--tight"
  style={{ background: "var(--white)" }}
>
  <div className="container">
    <div className="section-head center">
      <span className="eyebrow">{t("about.whyChooseUs.eyebrow")}</span>
      <h2>{t("about.whyChooseUs.title")}</h2>
      <p>{t("about.whyChooseUs.body")}</p>
    </div>
  </div>
</section>

  {/* FACILITIES */}
<section id="facilities"
  className="section section--tight"
  style={{ background: "var(--white)" }}
>
  <div className="container">
    <div className="section-head center">
      <span className="eyebrow">Our Environment</span>
      <h2>Kids' Entertainment Area</h2>
    </div>

    <div className={styles.showcaseWrap}>

      {/* Row 1: Text Left, Image Right */}
      <div className={styles.showcaseRow}>
        <div>
          <h3>Football Space, Golf</h3>
          <p>An inspiring outdoor sports environment where children build coordination, balance, teamwork, resilience, and self-confidence through enjoyable, age-appropriate football experiences.</p>
        </div>
        <img src="/f1.png" alt="Classroom" className={styles.showcaseImg} />
      </div>

      {/* Row 2: Image Left, Text Right */}
      <div className={`${styles.showcaseRow} ${styles.showcaseReverse}`}>
        <div>
          <h3>PlayGround</h3>
          <p>Our thoughtfully designed outdoor learning environment provides a safe and engaging space where children explore, play, and connect with nature while developing confidence, resilience, creativity, and essential physical, cognitive, social, and emotional skills.</p>
        </div>
        <img src="/hs2.jpg" alt="Playground" className={styles.showcaseImg} />
      </div>

      {/* Row 3: Text Left, Image Right */}
      <div className={styles.showcaseRow}>
        <div>
          <h3>Reading Corner</h3>
          <p>A thoughtfully curated reading environment where children discover the joy of books, cultivate a lifelong love of reading, and strengthen literacy, language, imagination, and critical thinking through meaningful literary experiences.</p>
        </div>
        <img src="/f2.jpg" alt="Reading Corner" className={styles.showcaseImg} />
      </div>

      {/* Row 4: Image Left, Text Right */}
      <div className={`${styles.showcaseRow} ${styles.showcaseReverse}`}>
        <div>
          <h3>Bunny House</h3>
          <p>Nature-based space where children learn empathy, care, and responsibility through hands-on interactions with rabbits, fostering curiosity and respect for living things.</p>
        </div>
        <img src="/hs8.png" alt="Bunny House" className={styles.showcaseImg} />
      </div>

      {/* Row 5: Text Left, Image Right */}
      <div className={styles.showcaseRow}>
        <div>
          <h3>Sand Play Area, Biking s &Mini Garden</h3>
          <p>A dedicated clinic ensuring every child's health and safety are looked after throughout the school day.</p>
        </div>
        <img src="/hs3.png" alt="Student Health Clinic" className={styles.showcaseImg} />
      </div>

    </div>
  </div>
</section>

      {/* TIMELINE */}
     <section id="values" className="section">
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
     <section id="office"
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className={styles.split}>
            <div>
              <h2>{t("about.principalPhoto.title")}</h2>
             {t("about.principalPhoto.body", { returnObjects: true }).map((para, i) => (
  <p key={i}>{para}</p>
))}
            </div>
            <motion.img
              src="office.png"
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
