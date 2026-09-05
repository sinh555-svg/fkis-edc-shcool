import { useTranslation } from 'react-i18next'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import ContactForm from '../components/ContactForm.jsx'
import Map from '../components/Map.jsx'
import Card from '../components/Card.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useTranslation()

  const infoItems = [
    { icon: FiMapPin, label: t('contact.info.address'), value: t('contact.info.addressValue') },
    { icon: FiPhone, label: t('contact.info.phone'), value: t('contact.info.phoneValue') },
    { icon: FiMail, label: t('contact.info.email'), value: t('contact.info.emailValue') },
    { icon: FiClock, label: t('contact.info.hours'), value: t('contact.info.hoursValue') },
  ]

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="eyebrow" style={{ color: '#ffd166' }}>{t('contact.hero.eyebrow')}</span>
          <h1 className={styles.pageTitle}>{t('contact.hero.title')}</h1>
          <p className={styles.pageSubtitle}>{t('contact.hero.subtitle')}</p>
        </div>
       
{/* CONTACT INFO */}
<section className="section" style={{ background: "var(--white)" }}>
  <div className="container">
    <div className={styles.split}>
      <img
        src="/school-history1.jpg"
        alt="Contact Us"
        className={styles.contactImg}
      />
      <div>
        <h2>Contact Info</h2>
        <p>
          Our friendly staff are ready to welcome you! Feel free to visit our campus, call us, or send a message — we look forward to hearing from you.
        </p>
      </div>
    </div>
  </div>
</section>

      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div>
              <div className={styles.infoList}>
                <h3>{t('contact.info.title')}</h3>
                {infoItems.map((item) => (
                  <div key={item.label} className={styles.infoItem}>
                    <span className={styles.infoIcon}><item.icon size={18} /></span>
                    <div>
                      <span className={styles.infoLabel}>{item.label}</span>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.mapWrap}>
                <h3>{t('contact.map.title')}</h3>
                <Map height={320} />
              </div>
            </div>

            <Card className={styles.formCard}>
              <h3>{t('contact.form.title')}</h3>
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

