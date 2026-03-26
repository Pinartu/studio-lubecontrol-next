import {defineField, defineType} from 'sanity'

export const navColumn = defineType({
  name: 'navColumn',
  title: 'Nav column',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Column heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'navLinkNested'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
