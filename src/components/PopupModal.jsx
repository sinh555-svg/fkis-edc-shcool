// Auto announcement popup. Shown once per calendar day (tracked
// via localStorage), a few seconds after first paint so it doesn't
// block the hero from being seen.
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./Button.jsx";
import styles from "./PopupModal.module.css";

const STORAGE_KEY = "sunrise-popup-last-shown";

export default function PopupModal() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem(STORAGE_KEY);
    if (lastShown !== today) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem(STORAGE_KEY, today);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          role="presentation"
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label={t("popup.close")}
            >
              <FiX size={20} />
            </button>
            <img src="free1w.jpg" alt="" className={styles.image} />
            <div className={styles.body}>
              <h3 id="popup-title">{t("popup.title")}</h3>
              <p>{t("popup.body")}</p>
              <div className={styles.actions}>
                <Button to="/admission" variant="primary" onClick={close}>
                  {t("popup.cta")}
                </Button>
                <button
                  type="button"
                  className={styles.dismiss}
                  onClick={close}
                >
                  {t("popup.dismiss")}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
