import {defineField, defineType} from 'sanity'

const portable = [{type: 'block'}, {type: 'image', options: {hotspot: true}}]

export default defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', initialValue: 'Home', hidden: true, readOnly: true}),
    defineField({
      name: 'heroSlides',
      title: 'Hero slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subheading', title: 'Subheading', type: 'text', rows: 2}),
            defineField({name: 'cta', title: 'Button label', type: 'string'}),
            defineField({name: 'ctaHref', title: 'Button link', type: 'string'}),
            defineField({
              name: 'backgroundImage',
              title: 'Background image (optional)',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {select: {title: 'heading'}},
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'featureItems',
      title: 'Feature bar items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Truck', value: 'truck'},
                  {title: 'Package', value: 'package'},
                  {title: 'Mail', value: 'mail'},
                  {title: 'Phone', value: 'phone'},
                ],
                layout: 'dropdown',
              },
              initialValue: 'truck',
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'text', title: 'Title line', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'sub', title: 'Subtitle (optional)', type: 'string'}),
          ],
          preview: {select: {title: 'text'}},
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({name: 'welcomeTitle', title: 'Welcome section title', type: 'string'}),
    defineField({name: 'welcomeBody', title: 'Welcome body', type: 'array', of: portable}),
    defineField({name: 'welcomeCtaLabel', title: 'Welcome CTA label', type: 'string'}),
    defineField({name: 'welcomeCtaHref', title: 'Welcome CTA link', type: 'string'}),
    defineField({name: 'salesLinksTitle', title: 'Sales links section title', type: 'string'}),
    defineField({name: 'salesLinksSubtitle', title: 'Sales links section subtitle', type: 'text', rows: 3}),
    defineField({
      name: 'salesLinks',
      title: 'Sales website links',
      description: 'Two large cards linking to external sales websites.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', type: 'text', rows: 3}),
            defineField({name: 'href', title: 'External URL', type: 'url', validation: (Rule) => Rule.required()}),
            defineField({name: 'image', title: 'Image (optional)', type: 'image', options: {hotspot: true}}),
          ],
          preview: {select: {title: 'title', subtitle: 'href'}},
        },
      ],
      validation: (Rule) => Rule.max(2),
    }),
  ],
  preview: {prepare: () => ({title: 'Home page'})},
})
