export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Author Role/Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 }
        ]
      }
    },
    {
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      initialValue: false
    }
  ]
} 