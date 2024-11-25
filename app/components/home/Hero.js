import { getHero } from '../../lib/sanity'
import HeroClient from './HeroClient'

const fallbackHero = {
  heading: 'Transform Your Outdoor Space Into a Living Paradise',
  subheading: 'Professional landscaping services that bring your vision to life. From design to maintenance, we create stunning outdoor spaces that last.',
  backgroundImage: '/images/hero-bg.jpg',
  primaryButton: {
    text: 'Get Started',
    link: '/contact'
  },
  secondaryButton: {
    text: 'View Our Work',
    link: '/projects'
  }
}

export default async function Hero() {
  try {
    const hero = await getHero()
    return <HeroClient hero={hero || fallbackHero} isStaticContent={!hero} />
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return <HeroClient hero={fallbackHero} isStaticContent={true} />
  }
} 