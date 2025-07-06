"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, I do not accept insurance directly. However, I provide a detailed superbill that you can submit to your insurance company for potential reimbursement. Many clients find they can recover a portion of their session fees through their out-of-network benefits.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, I offer virtual sessions via secure Zoom video calls on Mondays, Wednesdays, and Fridays from 1:00 PM to 5:00 PM. Online therapy can be just as effective as in-person sessions and offers greater flexibility for busy schedules.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require 24-hour advance notice for cancellations or rescheduling. Appointments cancelled with less than 24 hours notice will be charged the full session fee. This policy helps ensure that appointment times remain available for all clients.",
    },
    {
      question: "How long are therapy sessions?",
      answer:
        "Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. This allows adequate time to explore concerns, practice new skills, and process insights in a comfortable, unhurried environment.",
    },
    {
      question: "How do I know if therapy is right for me?",
      answer:
        "Therapy can benefit anyone seeking personal growth, better coping strategies, or support through life's challenges. I offer a free 15-minute consultation to discuss your concerns and determine if we're a good fit to work together.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 md:px-8 bg-stone-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-stone-600">Common questions about therapy and my practice</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-stone-800 font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
