import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LeadFunnel } from "@/components/lead-funnel"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LeadFunnel />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
