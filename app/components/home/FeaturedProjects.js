'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Modern Backyard Oasis',
    description: 'A complete transformation featuring a custom pool, outdoor kitchen, and sustainable landscaping.',
    image: '/project-1.jpg',
    href: '#projects'
  },
  {
    title: 'Zen Garden Retreat',
    description: 'A peaceful garden sanctuary with water features, native plants, and meditation spaces.',
    image: '/project-2.jpg',
    href: '#projects'
  }
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-600">
            Explore some of our finest work and get inspired for your next landscaping project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                <p className="mb-4 text-white/90">{project.description}</p>
                <Link
                  href={project.href}
                  className="btn btn-primary"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#projects" className="btn btn-outline btn-primary btn-lg">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
} 