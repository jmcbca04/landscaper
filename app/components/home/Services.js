import { getServices } from '../../lib/sanity'
import ServicesClient from './ServicesClient'

// Fallback content
const fallbackContent = {
  title: "Our Services",
  description: "We offer comprehensive landscaping services to transform and maintain your outdoor spaces.",
  services: [
    {
      title: 'Landscape Design',
      description: 'Custom designs that blend beauty with functionality, creating outdoor spaces that reflect your style.',
      image: '/images/service-design.jpg',
      href: '#services'
    },
    {
      title: 'Garden Maintenance',
      description: 'Regular maintenance services to keep your garden looking beautiful throughout the year.',
      image: '/images/service-maintenance.jpg',
      href: '#services'
    },
    {
      title: 'Hardscaping',
      description: 'Create stunning patios, walkways, and retaining walls that enhance your outdoor living space.',
      image: '/images/service-hardscape.jpg',
      href: '#services'
    }
  ]
}

export default async function Services() {
  try {
    const sanityData = await getServices()
    
    if (!sanityData) {
      return (
        <ServicesClient 
          services={fallbackContent.services}
          title={fallbackContent.title}
          description={fallbackContent.description}
          isStaticContent={true} 
        />
      )
    }

    return (
      <ServicesClient 
        services={sanityData.services}
        title={sanityData.metadata?.title || fallbackContent.title}
        description={sanityData.metadata?.description || fallbackContent.description}
        isStaticContent={false} 
      />
    )
  } catch (error) {
    console.error('Error fetching services:', error)
    return (
      <ServicesClient 
        services={fallbackContent.services}
        title={fallbackContent.title}
        description={fallbackContent.description}
        isStaticContent={true} 
      />
    )
  }
} 