import {defineField, defineType} from 'sanity'

export const navSubGroup = defineType({
  name: 'navSubGroup',
  title: 'Sub-group (level 3)',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navSimpleLink',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Path or URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})

export const navLinkNested = defineType({
  name: 'navLinkNested',
  title: 'Nav link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'href', title: 'Path or URL', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'subGroups',
      title: 'Sub-groups (mega-menu level 3)',
      type: 'array',
      of: [{type: 'navSubGroup'}],
    }),
  ],
})
