import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ValorSection from '@/components/ValorSection'
import ProductosSection from '@/components/ProductosSection'
import ProcesoSection from '@/components/ProcesoSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
{/* This is a comment inside JSX */}
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValorSection />
        <ProductosSection />
        <ProcesoSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
