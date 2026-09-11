// Sticky site navigation. Collapses to a hamburger + slide-in
// panel below 900px. Highlights the active route.
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import Button from './Button.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import styles from './Navbar.module.css'
const LINKS = [
  {
    to: '/',
    key: 'home',
    children: [
      { to: '/#program-overview', label: 'Program Overview' },
      { to: '/#wellbeing', label: 'Student Wellbeing & Safeguarding' },
      { to: '/#principal', label: 'A CEO Chief Executive Officer' },
      { to: '/#teachers', label: 'Meet Our Teachers' },
      { to: '/#testimonials', label: 'Parent Testimonials' },
    ],
  },
  {
    to: '/about',
    key: 'about',
    children: [
      { to: '/about#history', label: 'School History' },
      { to: '/about#why-choose-us', label: 'Why Choose Us' },
      { to: '/about#facilities', label: "Kids' Entertainment Area" },
      { to: '/about#values', label: 'Vision Mission Value' },
      { to: '/about#office', label: 'Information Office' },
    ],
  },
  { to: '/academic', key: 'academic' },
  { to: '/admission', key: 'admission' },
  { to: '/news', key: 'news' },
  { to: '/contact', key: 'contact' },

]
export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" width={40} height={40} className={styles.logoImg} />
          <span className={styles.brandText}>{t('meta.schoolName')}</span>
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Primary">
  {LINKS.map((link) =>
    link.children ? (
      <div
        key={link.to}
        className={styles.dropdownWrap}
        onMouseEnter={() => setDropdownOpen(link.to)}
        onMouseLeave={() => setDropdownOpen(null)}
      >
        <NavLink
          to={link.to}
          end={link.to === '/'}
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
        >
          {t(`nav.${link.key}`)}
        </NavLink>
        <AnimatePresence>
          {dropdownOpen === link.to && (
            <motion.div
              className={styles.dropdownMenu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              {link.children.map((child) => (
                <a key={child.to} href={child.to} className={styles.dropdownItem}>
                  {child.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ) : (
      <NavLink
        key={link.to}
        to={link.to}
        end={link.to === '/'}
        className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
      >
        {t(`nav.${link.key}`)}
      </NavLink>
    )
  )}
</nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
            title={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <LanguageSwitcher />
          <div className={styles.applyDesktop}>
            <Button to="/admission" variant="primary">{t('nav.applyNow')}</Button>
          </div>
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t('common.closeMenu') : t('common.menu')}
            aria-expanded={open}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            aria-label="Mobile"
          >
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
            <Button to="/admission" variant="primary" block onClick={() => setOpen(false)}>
              {t('nav.applyNow')}
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
