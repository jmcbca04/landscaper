export default {
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Section Description',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
} 