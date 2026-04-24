import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import LeadForm from '@/components/LeadForm'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <LeadForm />
      <CTA />
      <Footer />
    </main>
  )
}
