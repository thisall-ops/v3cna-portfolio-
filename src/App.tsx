import { useCursorField } from './hooks/useCursorField'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Certifications } from './sections/Certifications'
import { Achievements } from './sections/Achievements'
import { CV } from './sections/CV'

export default function App() {
  useCursorField()

  return (
    <>
      <div className="bg-field" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="vignette" aria-hidden />
      <CustomCursor />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Achievements />
        <CV />
      </main>
      <Footer />
    </>
  )
}
