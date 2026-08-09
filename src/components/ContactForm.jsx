// Contact form with lightweight client-side validation and a
// simulated submit (no backend in this scaffold — wire up your
// own endpoint or a service like Formspree in handleSubmit).
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiSend } from 'react-icons/fi'
import styles from './ContactForm.module.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = t('contact.form.errorRequired')
    if (!values.email.trim()) next.email = t('contact.form.errorRequired')
    else if (!EMAIL_RE.test(values.email)) next.email = t('contact.form.errorEmail')
    if (!values.message.trim()) next.message = t('contact.form.errorRequired')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">{t('contact.form.name')}</label>
        <input id="name" name="name" type="text" value={values.name} onChange={handleChange} placeholder={t('contact.form.namePlaceholder')} aria-invalid={!!errors.name} />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder={t('contact.form.emailPlaceholder')} aria-invalid={!!errors.email} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">{t('contact.form.phone')}</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} placeholder={t('contact.form.phonePlaceholder')} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">{t('contact.form.message')}</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange} placeholder={t('contact.form.messagePlaceholder')} aria-invalid={!!errors.message} />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? t('contact.form.sending') : (<>{t('contact.form.submit')} <FiSend size={16} /></>)}
      </button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            className={styles.success}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
          >
            <FiCheckCircle size={18} /> {t('contact.form.success')}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
