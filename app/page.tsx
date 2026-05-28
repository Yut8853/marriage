import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { FeaturesSection } from '@/components/features-section'
import { PricingSection } from '@/components/pricing-section'
import { StatsSection } from '@/components/stats-section'
import { FlowSection } from '@/components/flow-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { AboutSection } from '@/components/about-section'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'
import { SceneBackground } from '@/components/scene-background'

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SceneBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <PricingSection />
        <StatsSection />
        <FlowSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
