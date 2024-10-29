import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Faq from './sections/Faq'
import Download from './sections/Download'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  )
}

export default App
