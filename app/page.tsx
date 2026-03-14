import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { TrendsSection } from "@/components/home/trends-section"
import { LooksSection } from "@/components/home/looks-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { LocationSection } from "@/components/home/location-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TrendsSection />
        <LooksSection />
        <TestimonialsSection />
        <CTASection />
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}
