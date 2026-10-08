# Egyptian Table Tennis Federation — Website

Bilingual (English / العربية) React + Vite website for the Egyptian Table Tennis Federation.

## Quick start

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
egyptian-ttf-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # entry point
    ├── App.jsx             # layout + language state (en/ar, RTL switch)
    ├── i18n.js             # ALL content, both languages — edit text here
    ├── data.js             # image imports
    ├── styles.css          # all styles (RTL-friendly logical properties)
    ├── assets/             # photos used by News & Gallery
    └── components/
        ├── Navbar.jsx      # + language toggle
        ├── Hero.jsx
        ├── Section.jsx     # shared section wrapper
        ├── About.jsx
        ├── Services.jsx
        ├── Programs.jsx
        ├── News.jsx
        ├── Competitions.jsx
        ├── Rankings.jsx    # men/women tab switcher
        ├── Gallery.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Customizing

- **Text/content:** everything lives in `src/i18n.js` (two objects: `en` and `ar`). Add or edit entries in both.
- **Rankings / events / news:** sample data in `src/i18n.js` — replace with real federation data.
- **Images:** drop files into `src/assets/` and update the imports in `src/data.js`.
  The bundled photos are placeholder news images — replace them with the
  federation's own photos before publishing.
