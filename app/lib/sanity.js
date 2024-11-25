import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  console.error('Sanity Project ID is not set in environment variables')
}

export const client = createClient({
  projectId: projectId || '',  // Fallback to empty string to prevent build errors
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function getAbout() {
  if (!projectId) return null
  return client.fetch(`*[_type == "about"][0]{
    mainImage,
    title,
    mainContent,
    stats[] {
      value,
      label
    }
  }`)
}

export async function getHero() {
  if (!projectId) return null
  return client.fetch(`*[_type == "hero"][0]{
    backgroundImage,
    heading,
    subheading,
    primaryButton {
      text,
      link
    },
    secondaryButton {
      text,
      link
    }
  }`)
}

export async function getServices() {
  if (!projectId) return null
  
  try {
    const query = `{
      "metadata": *[_type == "servicesSection"][0]{
        title,
        description
      },
      "services": *[_type == "service" && isHighlighted == true] | order(order asc) {
        title,
        description,
        mainImage,
        slug,
        order
      }
    }`
    
    const result = await client.fetch(query)
    if (!result.services || result.services.length === 0) {
      return null
    }
    return result
  } catch (error) {
    console.error('Error fetching services:', error)
    return null
  }
}
