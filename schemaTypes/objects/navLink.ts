import {defineField, defineType} from 'sanity'
import {validateNavHrefString} from '../urlPathValidation'

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
              placeholder: '/products/electronics',
              description:
                'Must exactly match the URL path of the linked Category Page. Check the Category Page document to confirm the correct value before publishing. For external sites you may use a full web address instead.',
              validation: (Rule) => Rule.required().custom((val) => validateNavHrefString(val)),
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
    defineField({
      name: 'href',
      title: 'Path or URL',
      type: 'string',
      placeholder: '/products/electronics',
      description:
        'Must exactly match the URL path of the linked Category Page. Check the Category Page document to confirm the correct value before publishing. For external sites you may use a full web address instead.',
      validation: (Rule) => Rule.required().custom((val) => validateNavHrefString(val)),
    }),
    defineField({
      name: 'subGroups',
      title: 'Sub-groups (mega-menu level 3)',
      type: 'array',
      of: [{type: 'navSubGroup'}],
    }),
  ],
})
