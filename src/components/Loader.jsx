// First-paint loading screen. Shown briefly while fonts/assets
// settle, so the sunrise motif is the very first thing seen.
import { useTranslation } from 'react-i18next'

export default function Loader() {
  const { t } = useTranslation()
  return (
    <div className="loader-screen" role="status" aria-live="polite">
      <svg width="72" height="72" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="40" r="14" fill="#ff1a1a">
          <animate attributeName="cy" values="40;34;40" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <path d="M6 46 Q32 30 58 46" stroke="#e6f2ff" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>{t('common.loading')}</span>
    </div>
  )
}
