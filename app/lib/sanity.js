import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function getAbout() {
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
