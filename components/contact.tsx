"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface FormData {
  name: string
  phone: string
  email: string
  reason: string
  preferredTime: string
  agreeToContact: boolean
}

interface ValidationErrors {
  [key: string]: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    reason: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation patterns and functions
  const validateName = (name: string): string => {
    if (!name.trim()) {
      return "Name is required"
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long"
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      return "Name can only contain letters, spaces, hyphens, and apostrophes"
    }
    return ""
  }

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) {
      return "Phone number is required"
    }
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, "")
    if (digitsOnly.length < 10) {
      return "Phone number must be at least 10 digits"
    }
    if (digitsOnly.length > 11) {
      return "Phone number cannot exceed 11 digits"
    }
    // Accept various formats: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    // Explanation:
    // 1. Optional country code `+1` with optional space.
    // 2. Area code can be wrapped in parentheses or not.
    // 3. Separators can be a dash, dot, or space.
    const phoneRegex = /^(\+?1\s?)?($$[0-9]{3}$$|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/
    if (!phoneRegex.test(phone.trim())) {
      return "Please enter a valid phone number (e.g., (123) 456-7890 or 123-456-7890)"
    }
    return ""
  }

  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "Email address is required"
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address (e.g., name@example.com)"
    }
    return ""
  }

  const validateReason = (reason: string): string => {
    if (!reason.trim()) {
      return "Please tell us what brings you here"
    }
    if (reason.trim().length < 20) {
      return `Please provide more details (minimum 20 characters, currently ${reason.trim().length})`
    }
    if (reason.trim().length > 1000) {
      return "Please keep your message under 1000 characters"
    }
    return ""
  }

  const validatePreferredTime = (time: string): string => {
    if (!time.trim()) {
      return "Preferred contact time is required"
    }
    if (time.trim().length < 5) {
      return "Please provide more specific time preferences (e.g., 'Weekday mornings' or 'After 6 PM')"
    }
    return ""
  }

  const validateCheckbox = (checked: boolean): string => {
    if (!checked) {
      return "You must agree to be contacted to submit this form"
    }
    return ""
  }

  const validateField = (field: keyof FormData, value: string | boolean): string => {
    switch (field) {
      case "name":
        return validateName(value as string)
      case "phone":
        return validatePhone(value as string)
      case "email":
        return validateEmail(value as string)
      case "reason":
        return validateReason(value as string)
      case "preferredTime":
        return validatePreferredTime(value as string)
      case "agreeToContact":
        return validateCheckbox(value as boolean)
      default:
        return ""
    }
  }

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Real-time validation
    const error = validateField(field, value)
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "")

    // Format as (XXX) XXX-XXXX
    if (digitsOnly.length >= 6) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`
    } else if (digitsOnly.length >= 3) {
      return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`
    } else {
      return digitsOnly
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    handleInputChange("phone", formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      console.log("Form submitted:", formData)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 md:px-8 bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-medium text-green-800 mb-4">Thank You for Reaching Out</h2>
            <p className="text-green-700 text-sm sm:text-base">
              I've received your message and will get back to you within 24 hours. I look forward to speaking with you
              about how I can support your journey.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 md:px-8 bg-white scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-4">Get Started Today</h2>
          <p className="text-base sm:text-lg text-stone-600">
            Ready to begin your journey? Fill out the form below and I'll be in touch within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div>
            <Label htmlFor="name" className="text-stone-700 font-medium text-sm sm:text-base">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`mt-1 text-sm sm:text-base ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
              placeholder="Enter your full name"
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div id="name-error" className="flex items-center mt-1 text-red-600 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <Label htmlFor="phone" className="text-stone-700 font-medium text-sm sm:text-base">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`mt-1 text-sm sm:text-base ${errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
              placeholder="(555) 123-4567"
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <div id="phone-error" className="flex items-center mt-1 text-red-600 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>{errors.phone}</span>
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="text-stone-700 font-medium text-sm sm:text-base">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`mt-1 text-sm sm:text-base ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
              placeholder="your.email@example.com"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div id="email-error" className="flex items-center mt-1 text-red-600 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Reason Field */}
          <div>
            <Label htmlFor="reason" className="text-stone-700 font-medium text-sm sm:text-base">
              What brings you here? *
            </Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              className={`mt-1 text-sm sm:text-base ${errors.reason ? "border-red-500 focus:border-red-500" : ""}`}
              placeholder="Please share what you're hoping to work on, any specific concerns, or questions you have about therapy. The more details you provide, the better I can understand how to help you."
              rows={4}
              aria-describedby={errors.reason ? "reason-error" : "reason-help"}
            />
            <div className="flex justify-between items-start mt-1">
              <div className="flex-1">
                {errors.reason && (
                  <div id="reason-error" className="flex items-center text-red-600 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span>{errors.reason}</span>
                  </div>
                )}
                {!errors.reason && (
                  <div id="reason-help" className="text-stone-500 text-xs">
                    Minimum 20 characters required
                  </div>
                )}
              </div>
              <div className="text-xs text-stone-500 ml-2">{formData.reason.length}/1000</div>
            </div>
          </div>

          {/* Preferred Time Field */}
          <div>
            <Label htmlFor="preferredTime" className="text-stone-700 font-medium text-sm sm:text-base">
              Preferred time to reach you *
            </Label>
            <Input
              id="preferredTime"
              type="text"
              value={formData.preferredTime}
              onChange={(e) => handleInputChange("preferredTime", e.target.value)}
              className={`mt-1 text-sm sm:text-base ${errors.preferredTime ? "border-red-500 focus:border-red-500" : ""}`}
              placeholder="e.g., Weekday mornings, evenings after 6pm, weekends"
              aria-describedby={errors.preferredTime ? "time-error" : "time-help"}
            />
            {errors.preferredTime && (
              <div id="time-error" className="flex items-center mt-1 text-red-600 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>{errors.preferredTime}</span>
              </div>
            )}
            {!errors.preferredTime && (
              <div id="time-help" className="text-stone-500 text-xs mt-1">
                Please specify days of the week and/or time ranges when you're available
              </div>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToContact"
                checked={formData.agreeToContact}
                onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
                className={`mt-1 ${errors.agreeToContact ? "border-red-500" : ""}`}
                aria-describedby={errors.agreeToContact ? "consent-error" : undefined}
              />
              <Label
                htmlFor="agreeToContact"
                className="text-xs sm:text-sm text-stone-700 leading-relaxed cursor-pointer"
              >
                I agree to be contacted by Dr. Serena Blake regarding my inquiry. I understand that this form is not
                secure and should not include sensitive health information. By submitting this form, I consent to
                receive communications about scheduling and therapy services. *
              </Label>
            </div>
            {errors.agreeToContact && (
              <div id="consent-error" className="flex items-center text-red-600 text-xs sm:text-sm ml-7">
                <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>{errors.agreeToContact}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || Object.keys(errors).some((key) => errors[key])}
            className="w-full bg-sage-500 hover:bg-sage-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-full text-sm sm:text-lg font-medium transition-all duration-200"
            style={{
              backgroundColor: isSubmitting || Object.keys(errors).some((key) => errors[key]) ? undefined : "#9CAF88",
            }}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending Message...
              </div>
            ) : (
              "Send Message"
            )}
          </Button>

          {/* Form Help Text */}
          <div className="text-center text-xs sm:text-sm text-stone-500 mt-4">
            <p>All fields marked with * are required. Your information is kept confidential.</p>
            <p className="mt-1">Response time: Within 24 hours during business days.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
