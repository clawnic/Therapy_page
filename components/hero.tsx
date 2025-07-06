"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 md:px-8 mt-16 sm:mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight">
          Compassionate Care for
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 leading-tight">
          Healing, Growth, and Well-Being
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
          Offering evidence-based individual and couples therapy in Los Angeles and virtually across California through
          personalized, mindful approaches
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-sage-500 hover:bg-sage-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-200 hover:scale-105"
          style={{ backgroundColor: "#9CAF88", borderRadius: "50px" }}
        >
          BOOK A FREE CONSULT
        </Button>
      </div>
    </section>
  )
}
