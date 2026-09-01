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
import { useState } from "react";

const PROGRAM_OVERVIEW_KEYS = ['nursery', 'kindergarten', 'preschool'];
const PROGRAM_IMAGES = {
  nursery: '/gallery-1.jpg',
  kindergarten: '/gallery-2.jpg',
  preschool: '/hs5.png',
};

const TESTIMONIAL_KEYS = ['parent1', 'parent2'];
const TESTIMONIAL_IMAGES = {
  parent1: '/parent1.jpg',
  parent2: '/parent2.jpg',
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
    name: "Srey Danet",
    role: "Khmer Head Teacher",
    image: "/teacher-danet.jpg",
  },
  {
    name: "Phann SreyNoch",
    role: "Deputy Director",
    image: "/noch.png",
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
  const [showWellbeingMore, setShowWellbeingMore] = useState(false);
  const principalBody = t("principal.body", { returnObjects: true });
  const principalParagraphs = Array.isArray(principalBody)
    ? principalBody
    : typeof principalBody === "string"
      ? principalBody.split(/(?<=[.!?])\s+/).filter(Boolean)
      : [];

  return (
    <>
      <Hero />

    {/* PROGRAM OVERVIEW */}
<section
  className="section section--tight"
  style={{ background: "var(--white)" }}
>
  <div className="container">
    <div className="section-head center">
      <span className="eyebrow">{t("programOverview.eyebrow")}</span>
      <h2>{t("programOverview.title")}</h2>
    </div>
    <div className={styles.programOverviewGrid}>
      {PROGRAM_OVERVIEW_KEYS.map((key, i) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
        >
          <div className={styles.programOverviewCard}>
            <img
              src={PROGRAM_IMAGES[key]}
              alt={t(`programOverview.items.${key}.title`)}
              className={styles.programOverviewImg}
            />
            <h3>{t(`programOverview.items.${key}.title`)}</h3>
            <p>{t(`programOverview.items.${key}.desc`)}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    {/* CAMPUS SHOWCASE - Alternating Layout */}
<section className="section" style={{ background: "var(--white)" }}>
  <div className="container">
    <div className={styles.showcaseWrap}>

      {/* Row 1: Image Left, Text Right */}
      <div className={styles.showcaseRow}>
        <img src="/f8.png" alt="Information Office" className={styles.showcaseImg} />
        <div>
          <h3>A Clam and Inspiring Learning Environment</h3>
          <p>
          At Future Kids International School, Children learn in a peaceful, Welcoming campus designed to help them feel safe, confident, feel like home.
          Surrounded by nature, our environment encourages curiosity, exploration, and joyful learning every day with an adventure trail, two age-appropriate playground, a rabbit's and an garden that children enjoy meaningful outdoor experences, inspire discovery, creativity, and a lifelong love of learning.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left, Image Right */}
      <div className={`${styles.showcaseRow} ${styles.showcaseReverse}`}>
        <div>
          <h3>Thoughtfully Designed for the Future</h3>
          <p>
            Every aspect of Future Kids has been carefully designed to support children's learning while caring for the world they will inherit.
             Our eco-conscious campus features creatively repurposed shipping containers, solar energy, and spacious green areas where children can learn, play, and connect with nature every day.We believe that a sustainable environment inspires responsible, curious, and confident young learners.
          </p>
        </div>
        <img src="/f7.png" alt="Classroom" className={styles.showcaseImg} />
      </div>

      {/* Row 3: Image Left, Text Right */}
      <div className={styles.showcaseRow}>
        <img src="/show-room.jpg" alt="Playground" className={styles.showcaseImg} />
        <div>
          <h3>Designed Classrooms</h3>
          <p>
            Our classrooms environments are thoughtfully designed to comfort and effective learning to inspire curiosity, confidence, and to instill a love of learning, with large classrooms, every child receives personalized attention and meaningful support from our dedicated teachers. Bright colors, and carefully planned learning spaces create a warm, distraction-free environment where children feel safe, engaged, and ready to thrive.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* STUDENT WELLBEING & SAFEGUARDING */}
<section className="section" style={{ background: "var(--white)" }}>
  <div className="container">
    <div className={styles.split}>
      <h2 style={{ textAlign: "center" }}>Student Wellbeing & Safeguarding</h2>
      <img
        src="/f3.jpg"
        alt="Student Wellbeing"
        className={styles.historyImg}
      />
      <div>
        <span className="eyebrow">Our Commitment</span>
        <p>
          At Future Kids International School, the safety and wellbeing of every child is our top priority. We maintain a secure, nurturing campus where children feel protected, valued, and free to grow.
        </p>

        {showWellbeingMore && (
          <>
            <p>
              Our safeguarding policy includes trained staff, secure entry points, CCTV monitoring, and regular health checks. Every teacher and staff member undergoes background checks and child protection training before joining our team.
            </p>
            <p>
              We work closely with families to ensure open communication about each child's physical, emotional, and social wellbeing, creating a strong partnership between home and school.
            </p>
          </>
        )}

        <button
          onClick={() => setShowWellbeingMore(!showWellbeingMore)}
          className={styles.readMoreBtn}
        >
          {showWellbeingMore ? "Show Less" : "Read More"}
        </button>
      </div>
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
              {principalParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className={styles.principalName}>
                <strong>{t("principal.name")}</strong>
                <span>{t("principal.role")}</span>
              </div>
            </motion.div>
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

    {/* PARENT TESTIMONIALS */}
<section className="section">
  <div className="container">
    <div className="section-head center">
      <h2 style={{ color: "#e8502a" }}>Parent Testimonials</h2>
    </div>
    <div className={styles.testimonialGrid}>

      <div className={styles.testimonialCard}>
        <img src="/p1.jpg" alt="Parent Testimonial" className={styles.testimonialImg} />
        <h3 className={styles.testimonialName}>Future Kids School</h3>
        <p className={styles.testimonialQuote}>
          " Future Kids has helped my daughter develop a strong sense of independence. She now eats on her own, puts her plate in the sink after meals, and takes responsibility for her daily routines at home. She understands what needs to be done and completes her tasks independently, without needing to be reminded. We are very happy to see how much confidence and responsibility she has developed. "
        </p>
      </div>

      <div className={styles.testimonialCard}>
        <img src="/f10.jpg" alt="Parent of Chandin" className={styles.testimonialImg} />
        <h3 className={styles.testimonialName}>Future Kids School</h3>
        <p className={styles.testimonialQuote}>
          " Chandin has developed a wonderful sense of independence at Future Kids. She can now eat independently using a fork and spoon, wash her hands by herself, find and put on her own shoes, and clean up her toys after playing. We are very pleased with her progress. Future Kids provides Western-standard quality education with a strong focus on safety and hygiene. We also appreciate the 1-week free trial offered to new students, which gives parents a great opportunity to experience the school before enrolling. "
        </p>
      </div>

      <div className={styles.testimonialCard}>
        <img src="/p2.jpg" alt="Parent of Hong Noreakithya" className={styles.testimonialImg} />
        <h3 className={styles.testimonialName}>Future Kids School</h3>
        <p className={styles.testimonialQuote}>
          " My 3-year-old son, Hong Noreakithya, has been studying at Future Kids School for two months, and we have already noticed wonderful improvements in his communication, respect, and self-discipline. He is now more focused on writing, follows classroom rules, and has significantly reduced his screen time. We are very happy with his progress and truly appreciate the care and guidance he receives at Future Kids. I highly recommend Future Kids to any parent looking for a safe, trustworthy school that genuinely cares about children's development and well-being. "
        </p>
      </div>

      <div className={styles.testimonialCard}>
        <img src="/parent4.jpg" alt="Parent Testimonial" className={styles.testimonialImg} />
        <h3 className={styles.testimonialName}>Future Kids School</h3>
        <p className={styles.testimonialQuote}>
          " Since joining Future Kids, my daughter has made remarkable progress in her language and vocabulary skills. She loves singing along with her teachers and has become more cooperative, understanding, and less stubborn. We have also noticed a significant reduction in her TV and phone screen time. Most importantly, she has developed a strong sense of independence—she can eat by herself, prepare her own milk, and manage her daily routines with confidence. We are very happy with her progress and grateful for the care and guidance she receives at Future Kids. "
        </p>
      </div>

      <div className={styles.testimonialCard}>
        <img src="/p3.png" alt="Parent Testimonial" className={styles.testimonialImg} />
        <h3 className={styles.testimonialName}>Future Kids School</h3>
        <p className={styles.testimonialQuote}>
          " My 2-year-11-month-old son has made wonderful progress since joining Future Kids. Although he used to be a picky eater at home, he now enjoys eating a variety of foods at school. His communication skills have also improved significantly—he asks questions, responds actively, and expresses himself more confidently. He has developed many positive habits, such as putting rubbish in the bin, singing school songs at home, and greeting others politely. What I especially appreciate about Future Kids is its strong focus on children's safety and the exceptionally clean and well-maintained bathrooms. "
        </p>
      </div>

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
