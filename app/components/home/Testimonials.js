'use client'

import { useState } from 'react'

const testimonials = [
  {
    content: "GreenScape transformed our backyard into an amazing outdoor living space. Their attention to detail and professional service exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Homeowner"
  },
  {
    content: "The team's creativity and expertise helped us create a sustainable, low-maintenance garden that we enjoy year-round. Highly recommended!",
    author: "Michael Chen",
    role: "Property Manager"
  },
  {
    content: "Outstanding service from start to finish. They listened to our ideas and delivered a beautiful landscape that perfectly matches our vision.",
    author: "Emily Rodriguez",
    role: "Homeowner"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  return (
    <section id="testimonials" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-gray-600">
            Read testimonials from our satisfied clients about their experience with our landscaping services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <blockquote className="text-lg md:text-xl text-gray-600 mb-6">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                <cite className="not-italic">
                  <p className="font-medium text-primary text-lg">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeIndex].role}
                  </p>
                </cite>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={previousTestimonial}
                className="btn btn-circle btn-outline"
                aria-label="Previous testimonial"
              >
                ❮
              </button>
              <button
                onClick={nextTestimonial}
                className="btn btn-circle btn-outline"
                aria-label="Next testimonial"
              >
                ❯
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 