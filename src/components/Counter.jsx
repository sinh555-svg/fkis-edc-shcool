// Animated count-up number, triggers once when it scrolls into view.
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Counter.module.css'

export default function Counter({ to, suffix = '', label, duration = 1.6 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = null
    let raf
    const step = (ts) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, to, duration])

  return (
    <motion.div
      ref={ref}
      className={styles.counter}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className={styles.number}>{value.toLocaleString()}{suffix}</span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  )
}
