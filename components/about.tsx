import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 md:px-8 bg-stone-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-4 sm:mb-6">
              About Dr. Serena Blake
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years
                of experience and over 500 client sessions. She blends evidence-based approaches—like
                cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome
                anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to
                creating a safe, supportive space for you to thrive. Her approach combines clinical expertise with
                genuine warmth, ensuring each client feels heard, understood, and empowered on their healing journey.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 space-y-2 text-stone-600 text-sm sm:text-base">
              <p>
                <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
              </p>
              <p>
                <strong>Phone:</strong> (323) 555-0192
              </p>
              <p>
                <strong>Email:</strong> serena@blakepsychology.com
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/headshot.jpg"
                alt="Dr. Serena Blake, Clinical Psychologist"
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
