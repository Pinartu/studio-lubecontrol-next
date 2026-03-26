import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mainNavigation',
  title: 'Main navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Main menu',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'items',
      title: 'Top-level items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navTopItem',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Path',
              type: 'string',
              description: 'e.g. /fluid-handling or /',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'columns',
              title: 'Mega-menu columns',
              type: 'array',
              of: [{type: 'navColumn'}],
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Main navigation'}),
  },
})
