// src/components/LanguageSwitcher.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { FiGlobe, FiCheck } from "react-icons/fi";
import styles from "./LanguageSwitcher.module.css";

const LANGS = [
  { code: "km", flag: "https://flagcdn.com/kh.svg", label: "ភាសាខ្មែរ" },
  { code: "en", flag: "https://flagcdn.com/gb.svg", label: "English" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("sunrise-lang", code);
    document.documentElement.setAttribute("lang", code);
    setOpen(false);
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <FiGlobe size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.menu}
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                role="option"
                aria-selected={i18n.language === l.code}
                className={styles.option}
                onClick={() => changeLang(l.code)}
              >
                <img
                  src={l.flag}
                  alt=""
                  width={20}
                  height={20}
                  className={styles.flagImg}
                />
                <span>{l.label}</span>
                {i18n.language === l.code && (
                  <FiCheck size={16} className={styles.check} />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
