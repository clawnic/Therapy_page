import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  )
}
