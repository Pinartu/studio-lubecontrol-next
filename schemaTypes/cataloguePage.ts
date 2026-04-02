import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cataloguePage',
  title: 'Catalogue page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Page title', type: 'string', initialValue: 'Catalogue Library'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 3}),
    defineField({
      name: 'items',
      title: 'Catalogue items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text', rows: 3}),
            defineField({name: 'externalUrl', title: 'External URL', type: 'url'}),
            defineField({
              name: 'file',
              title: 'PDF file',
              type: 'file',
              options: {accept: '.pdf'},
            }),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
    defineField({name: 'bottomTitle', title: 'Bottom CTA title', type: 'string'}),
    defineField({name: 'bottomText', title: 'Bottom CTA text', type: 'text', rows: 2}),
    defineField({name: 'bottomButtonLabel', title: 'Bottom button label', type: 'string'}),
    defineField({name: 'bottomButtonHref', title: 'Bottom button link (mailto: or URL)', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Catalogue page'})},
})
