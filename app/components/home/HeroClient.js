'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../../lib/sanity-image'

export default function HeroClient({ hero, isStaticContent }) {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={isStaticContent ? hero.backgroundImage : urlForImage(hero.backgroundImage)}
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
} 