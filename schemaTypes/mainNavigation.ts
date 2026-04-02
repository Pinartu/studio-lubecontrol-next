import {defineField, defineType} from 'sanity'
import {validateNavHrefString} from './urlPathValidation'

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
              placeholder: '/products/electronics',
              description:
                'Must exactly match the URL path of the linked Category Page. Check the Category Page document to confirm the correct value before publishing.',
              validation: (Rule) => Rule.required().custom((val) => validateNavHrefString(val)),
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
