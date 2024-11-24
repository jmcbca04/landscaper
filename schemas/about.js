export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'mainContent',
      title: 'Main Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text'
    },
    {
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Certification Name',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Certification Image',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ]
} 