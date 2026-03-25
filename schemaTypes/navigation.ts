import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., Main Header Menu, Footer Menu',
    }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navigationItem',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'link', title: 'URL or Path', type: 'string'},
            {
              name: 'subItems',
              title: 'Sub Items (Dropdown)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'label', title: 'Label', type: 'string'},
                    {name: 'link', title: 'URL or Path', type: 'string'},
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
