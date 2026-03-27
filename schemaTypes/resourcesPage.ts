import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resourcesPage',
  title: 'Resources page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Page Title', type: 'string', initialValue: 'Resources & Downloads'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 3}),
    defineField({
      name: 'sections',
      title: 'Download Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'sectionTitle', title: 'Section Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'sectionDescription', title: 'Section Description', type: 'text', rows: 2}),
            defineField({
              name: 'downloads',
              title: 'Downloads',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
                    defineField({name: 'description', type: 'text', rows: 2}),
                    defineField({name: 'file', title: 'PDF File', type: 'file', options: {accept: '.pdf'}}),
                    defineField({name: 'externalUrl', title: 'External URL', type: 'url'}),
                  ],
                  preview: {select: {title: 'title'}},
                },
              ],
            }),
          ],
          preview: {select: {title: 'sectionTitle'}},
        },
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Resources page'})},
})
