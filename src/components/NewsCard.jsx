import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import styles from './NewsCard.module.css'

export default function NewsCard({ image, date, title, description, index = 0 }) {
  const { t } = useTranslation()
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.imageWrap}>
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
         <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}
