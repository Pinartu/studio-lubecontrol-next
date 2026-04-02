import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footerContent',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Column title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'body',
              title: 'Body text (optional)',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'label', type: 'string', validation: (Rule) => Rule.required()}),
                    defineField({name: 'href', type: 'string', validation: (Rule) => Rule.required()}),
                  ],
                },
              ],
            }),
          ],
          preview: {select: {title: 'title'}},
        },
      ],
    }),
    defineField({
      name: 'copyrightCompany',
      title: 'Copyright company name',
      type: 'string',
      description: 'Shown as: © {year} {company}. All rights reserved.',
    }),
  ],
  preview: {prepare: () => ({title: 'Footer content'})},
})
