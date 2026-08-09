import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSearch, FiCalendar, FiClock } from "react-icons/fi";
import NewsCard from "../components/NewsCard.jsx";
import styles from "./News.module.css";


const NEWS_KEYS = ["n1", "n2", "n3"];
const NEWS_IMAGES = {
  n1: "doctor.jpg",
  n2: "kru-watbo.jpg",
  n3: "888.png",
};

const EVENT_KEYS = ["e1", "e2", "e3"];

export default function News() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const items = useMemo(
    () =>
      NEWS_KEYS.map((key) => ({
        key,
        title: t(`news.items.${key}.title`),
        date: t(`news.items.${key}.date`),
        desc: t(`news.items.${key}.desc`),
        image: `/${NEWS_IMAGES[key]}`,
      })),
    [t],
  );

  const filtered = items.filter((item) =>
    (item.title + item.desc).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="eyebrow" style={{ color: "#ffd166" }}>
            {t("news.hero.eyebrow")}
          </span>
          <h1 className={styles.pageTitle}>{t("news.hero.title")}</h1>
          <p className={styles.pageSubtitle}>{t("news.hero.subtitle")}</p>

          <div className={styles.search}>
            <FiSearch size={18} />
            <input
              type="search"
              placeholder={t("news.searchPlaceholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={t("news.searchPlaceholder")}
            />
          </div>
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

      <section className="section">
        <div className="container">
          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((item, i) => (
                <NewsCard
                  key={item.key}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  description={item.desc}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <p className={styles.noResults}>{t("news.noResults")}</p>
          )}
        </div>
      </section>

      <section
        className="section section--tight"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{t("news.upcoming.eyebrow")}</span>
            <h2>{t("news.upcoming.title")}</h2>
          </div>
          <div className={styles.eventList}>
            {EVENT_KEYS.map((key) => (
              <div key={key} className={styles.eventItem}>
                <div>
                  <h3>{t(`news.events.${key}.title`)}</h3>
                  <span className={styles.eventMeta}>
                    
                    {t(`news.events.${key}.date`)}
                  </span>
                  <span className={styles.eventMeta}>
                    
                    {t(`news.events.${key}.time`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
