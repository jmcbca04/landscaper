import { getAbout } from '../../lib/sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '../../lib/sanity-image'

export default async function About() {
  try {
    const about = await getAbout()
    
    if (!about) {
      return (
        <section id="about" className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Our landscaping team at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="section-title text-left">About GreenScape</h2>
                <p className="text-gray-600">
                  With over a decade of experience in landscape design and maintenance, 
                  GreenScape has been transforming outdoor spaces into beautiful, 
                  sustainable environments that our clients love to call their own.
                </p>
                <p className="text-gray-600">
                  Our team of certified professionals combines creativity with 
                  technical expertise to deliver exceptional results. We believe in 
                  sustainable practices and use eco-friendly solutions that benefit 
                  both our clients and the environment.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-2">10+</h3>
                    <p className="text-gray-600">Years of Experience</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-2">500+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-2">100%</h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-2">24/7</h3>
                    <p className="text-gray-600">Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }

    return (
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              {about.mainImage && (
                <Image
                  src={urlForImage(about.mainImage)}
                  alt="Our landscaping team at work"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="space-y-6">
              <h2 className="section-title text-left">{about.title}</h2>
              <div className="text-gray-600">
                <PortableText value={about.mainContent} />
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {about.stats?.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-serif text-primary mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error fetching about data:', error)
    return <div>Error loading about section</div>
  }
}