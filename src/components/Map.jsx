// Embedded Google Map centred on the school's coordinates from the brief.
import { useTranslation } from 'react-i18next'
import styles from './Map.module.css'

const LAT = 13.3617
const LNG = 103.8597

export default function Map({ height = 340 }) {
  const { t } = useTranslation()
  const src = `https://maps.google.com/maps?q=${LAT},${LNG}&z=15&output=embed`

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
