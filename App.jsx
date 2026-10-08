import { useState, useEffect } from 'react'
import { translations } from './i18n.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Programs from './components/Programs.jsx'
import News from './components/News.jsx'
import Competitions from './components/Competitions.jsx'
import Rankings from './components/Rankings.jsx'
import Gallery from './components/Gallery.jsx'
import Sponsors from './components/Sponsors.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  // switch document direction for Arabic (RTL)
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <div>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Programs t={t} />
      <News t={t} />
      <Competitions t={t} />
      <Rankings t={t} />
      <Gallery t={t} />
      <Sponsors t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}
