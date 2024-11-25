'use client'

import { getHero } from '../../lib/sanity'
import { urlForImage } from '../../lib/sanity-image'
import Image from 'next/image'
import Link from 'next/link'

export default async function Hero() {
  try {
    const hero = await getHero()

    if (!hero) {
      return (
        <div className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Beautiful landscape design"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
          </div>

          <div className="container relative z-10 py-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-white mb-6">
                Transform Your Outdoor Space Into a Living Paradise
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Professional landscaping services that bring your vision to life. From design to maintenance, we create stunning outdoor spaces that last.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get Started
                </Link>
                <Link href="/projects" className="btn btn-outline btn-lg text-white hover:text-primary border-white">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={urlForImage(hero.backgroundImage)}
            alt="Beautiful landscape design"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-white mb-6">
              {hero.heading}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              {hero.subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href={hero.primaryButton.link} 
                className="btn btn-primary btn-lg"
              >
                {hero.primaryButton.text}
              </Link>
              <Link 
                href={hero.secondaryButton.link} 
                className="btn btn-outline btn-lg text-white hover:text-primary border-white"
              >
                {hero.secondaryButton.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return <div>Error loading hero section</div>
  }
} 