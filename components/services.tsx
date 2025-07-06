import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life. Through personalized approaches including CBT and mindfulness practices, we'll work together to help you find calm and confidence.",
      image: "/images/first.jpg",
      price: "$200 / individual session",
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen your connection with your partner through improved communication, conflict resolution, and deeper understanding. Whether you're facing challenges or seeking to enhance your relationship, couples therapy provides tools for lasting positive change.",
      image: "/images/second.jpg",
      price: "$240 / couples session",
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from past experiences in a safe, supportive environment using trauma-informed approaches. Together, we'll process difficult experiences at your pace, helping you reclaim your sense of safety, strength, and hope for the future.",
      image: "/images/third.jpg",
      price: "$200 / individual session",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 md:px-8 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-4">Services & Specialties</h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Comprehensive psychological care tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600 mb-4 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <p className="text-sage-600 font-medium text-sm sm:text-base" style={{ color: "#9CAF88" }}>
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-stone-50 rounded-lg p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-4">Office Hours</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-stone-700 text-sm sm:text-base">
            <div>
              <h4 className="font-medium mb-2">In-Person Sessions</h4>
              <p>Tuesday & Thursday</p>
              <p>10:00 AM – 6:00 PM</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Virtual Sessions (Zoom)</h4>
              <p>Monday, Wednesday & Friday</p>
              <p>1:00 PM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
