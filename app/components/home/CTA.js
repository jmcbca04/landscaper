'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="section bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Contact us today for a free consultation and let's bring your landscaping vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="btn btn-lg bg-white text-primary hover:bg-white/90">
              Get Started
            </Link>
            <Link href="#services" className="btn btn-lg btn-outline text-white hover:bg-white hover:text-primary">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 