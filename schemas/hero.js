export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
} 