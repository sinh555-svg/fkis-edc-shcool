import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiYoutube,
  FiSend,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import styles from "./Footer.module.css";

const LINKS = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/academic", key: "academic" },
  { to: "/admission", key: "admission" },
  { to: "/news", key: "news" },
  { to: "/contact", key: "contact" },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <svg
        className="sunrise-divider"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60 L0 34 Q150 4 300 34 Q450 60 600 34 Q750 4 900 34 Q1050 60 1200 34 L1200 60 Z"
          fill="#0b2545"
        />
      </svg>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link to="/" className={styles.brand}>
              <img
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className={styles.logoImg}
              />
              <span>{t("meta.schoolName")}</span>
            </Link>
            <p className={styles.about}>{t("footer.about")}</p>
            <div className={styles.social}>
              <a
                href="https://www.facebook.com/share/1LLwEXpvTL/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="https://t.me/FutureKidsInternationalschool"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <FiSend size={18} />
              </a>
              <a
                href="https://www.youtube.com/@FutureKidsInternationalSchool/shorts"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FiYoutube size={18} />
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>{t("footer.quickLinks")}</h4>
            <ul>
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{t(`nav.${l.key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>{t("footer.contact")}</h4>
            <ul className={styles.contactList}>
              <li>
                <FiMapPin size={16} />
                <span>{t("contact.info.addressValue")}</span>
              </li>
              <li>
                <FiPhone size={16} />
                <span>{t("contact.info.phoneValue")}</span>
              </li>
              <li>
                <FiMail size={16} />
                <span>{t("contact.info.emailValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {t("meta.schoolName")} — {t("footer.rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
