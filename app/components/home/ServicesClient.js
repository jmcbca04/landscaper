'use client'

import Image from 'next/image'
import { urlForImage } from '../../lib/sanity-image'

export default function ServicesClient({ services, title, description, isStaticContent }) {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[40px] font-serif text-primary mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[20px] shadow-md hover:shadow-lg transition-shadow"
            >
              <figure className="relative h-56">
                <Image
                  src={isStaticContent ? service.image : urlForImage(service.mainImage)}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-[20px]"
                />
              </figure>
              <div className="p-6">
                <h3 className="text-[28px] font-serif text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-[16px] leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 