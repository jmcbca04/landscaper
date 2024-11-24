'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Landscape Design',
    description: 'Custom designs that blend beauty with functionality, creating outdoor spaces that reflect your style.',
    image: '/service-design.jpg',
    href: '#services'
  },
  {
    title: 'Garden Maintenance',
    description: 'Regular maintenance services to keep your garden looking beautiful throughout the year.',
    image: '/service-maintenance.jpg',
    href: '#services'
  },
  {
    title: 'Hardscaping',
    description: 'Create stunning patios, walkways, and retaining walls that enhance your outdoor living space.',
    image: '/service-hardscape.jpg',
    href: '#services'
  }
]

export default function Services() {
  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-600">
            We offer comprehensive landscaping services to transform and maintain your outdoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <figure className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={service.href} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#services" className="btn btn-outline btn-primary btn-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
} 