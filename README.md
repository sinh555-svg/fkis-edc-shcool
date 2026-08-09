# Future Kids International School — School Website

A modern, bilingual (English/Khmer), fully responsive school website built with React 19, Vite, React Router, CSS Modules, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## What's Inside

- **6 pages**: Home, About Us, Academic, Admission, News & Events, Contact
- **Instant bilingual switching** (🇰🇭 Khmer / 🇬🇧 English) via `react-i18next` — every string on the site lives in `src/locales/en.json` and `src/locales/km.json`, nothing is hard-coded in components
- **Auto announcement popup** that appears once per day (tracked in `localStorage`)
- **Dark / light mode** toggle in the navbar
- **Framer Motion** page transitions, fade-ins, and hover effects throughout
- **Built-in photo lightbox** in the campus Gallery (no extra dependency)
- **Animated stat counters**, **searchable News page**, **Google Maps embed**, **contact form** with client-side validation
- Fully responsive: desktop, tablet, and mobile (hamburger menu)
- Accessible: semantic landmarks, `aria-*` labels, visible focus states, `prefers-reduced-motion` respected

## Project Structure

```
src/
  components/     Reusable UI: Navbar, Footer, Hero, PopupModal, NewsCard,
                   Gallery, Counter, Map, ContactForm, Button, Card, etc.
  pages/          One file + one .module.css per route
  locales/        en.json / km.json — all site copy
  context/        ThemeContext (dark/light mode)
  i18n.js         react-i18next configuration
  App.jsx         Routes + shared layout chrome
  main.jsx        Entry point
public/
  application-form.pdf   Placeholder — replace with your real PDF
  favicon.svg
```

## Before You Launch

1. **Replace placeholder images.** Every photo currently comes from `picsum.photos` (random stock placeholders) so the site runs out of the box with no assets to source. Swap the `src` URLs in `Hero.jsx`, `Gallery.jsx`, `Home.jsx`, `About.jsx`, `Academic.jsx`, `Admission.jsx`, `News.jsx`, and `PopupModal.jsx` for your school's real photography (drop files in `src/assets/images/` and import them, or point to your CDN).
2. **Replace `public/application-form.pdf`** with your real, printable application form.
3. **Update contact details** — address, phone, email, and office hours live in `src/locales/en.json` / `km.json` under the `contact.info` key. The map coordinates (13.3617, 103.8597) are set in `src/components/Map.jsx`.
4. **Wire up the contact form** to a real backend or a service like Formspree — see the comment at the top of `src/components/ContactForm.jsx`.
5. **Update social links** (Facebook, Telegram, YouTube) in `src/components/Footer.jsx`.
6. **Add a third language** any time by dropping a new `src/locales/xx.json` file (same keys as `en.json`) and adding it to `src/i18n.js` and `src/components/LanguageSwitcher.jsx`.

## Tech Stack

React 19 · Vite · React Router DOM · react-i18next · Framer Motion · React Icons · CSS Modules
