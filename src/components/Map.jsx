// Embedded Google Map centred on the school's coordinates from the brief.
import { useTranslation } from 'react-i18next'
import styles from './Map.module.css'

const LAT = 13.3617
const LNG = 103.8597

export default function Map({ height = 340 }) {
  const { t } = useTranslation()
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62111.30940624475!2d103.85817599999996!3d13.352959999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311017007e1bcf9b%3A0xf01579f533990ed3!2sFutureKids%20International%20School!5e0!3m2!1sen!2skh!4v1786328662139!5m2!1sen!2skh`

  return (
    <div className={styles.wrap} style={{ height }}>
      <iframe
        title={t('contact.map.title')}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
