// Campus photo grid with a simple built-in lightbox (no external
// dependency needed) — click a tile to view it larger, Esc/backdrop
// click to close.
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Gallery.module.css";

const images = ["hs2.jpg", "hs1.png", "hs3.png"];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, images.length]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            className={styles.tile}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            aria-label="Open image"
          >
            <img src={src} alt="" loading="lazy" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <button
              className={styles.close}
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <FiX size={26} />
            </button>
            <button
              className={styles.navBtn}
              style={{ left: 16 }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i - 1 + images.length) % images.length);
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft size={26} />
            </button>
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt=""
              className={styles.lightboxImg}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
            <button
              className={styles.navBtn}
              style={{ right: 16 }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i + 1) % images.length);
              }}
              aria-label="Next image"
            >
              <FiChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
