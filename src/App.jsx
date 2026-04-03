import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SectionDivider from './components/shared/SectionDivider'
import Services from './components/Services/Services'
import About from './components/About/About'
import Fleet from './components/Fleet/Fleet'
import Safety from './components/Safety/Safety'
import Geography from './components/Geography/Geography'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider fillColor="var(--color-dark)" direction="right" />
      <Services />
      <SectionDivider fillColor="var(--color-light)" direction="left" />
      <About />
      <SectionDivider fillColor="var(--color-dark)" direction="right" />
      <Fleet />
      <SectionDivider fillColor="var(--color-light)" direction="left" />
      <Safety />
      <SectionDivider fillColor="var(--color-dark)" direction="right" />
      <Geography />
      <SectionDivider fillColor="var(--color-light)" direction="left" />
      <Contact />
      <Footer />
    </>
  )
}
