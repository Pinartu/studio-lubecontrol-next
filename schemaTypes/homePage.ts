import {defineField, defineType} from 'sanity'

const portable = [{type: 'block'}, {type: 'image', options: {hotspot: true}}]

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  description: 'Manage all the content for the website\'s home page from here.',
  groups: [
    {name: 'hero', title: '🎯 Hero Banner', default: true},
    {name: 'features', title: '⭐ Feature Bar'},
    {name: 'welcome', title: '👋 Welcome Section'},
    {name: 'sales', title: '🛒 Store Links'},
  ],
  fields: [
    defineField({name: 'title', type: 'string', initialValue: 'Home', hidden: true, readOnly: true}),

    /* ═══════ HERO ═══════ */
    defineField({
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'subheading', title: 'Subheading', type: 'text', rows: 2}),
            defineField({name: 'cta', title: 'Button Text', type: 'string', description: 'Optional. E.g. "Explore Products"'}),
            defineField({name: 'ctaHref', title: 'Button Link', type: 'string', description: 'E.g. /fluid-handling'}),
            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: {hotspot: true},
              description: 'Optional. The background image for this slide.',
            }),
          ],
          preview: {select: {title: 'heading'}},
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'The large banner slides at the top of the home page. At least one slide is required.',
    }),

    /* ═══════ FEATURE BAR ═══════ */
    defineField({
      name: 'featureItems',
      title: 'Feature Bar Items',
      type: 'array',
      group: 'features',
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
                  {title: '🚛 Truck (Delivery)', value: 'truck'},
                  {title: '📦 Package', value: 'package'},
                  {title: '✉️ Email', value: 'mail'},
                  {title: '📞 Phone', value: 'phone'},
                ],
                layout: 'dropdown',
              },
              initialValue: 'truck',
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'text', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'sub', title: 'Subtitle (Optional)', type: 'string'}),
          ],
          preview: {select: {title: 'text'}},
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'The small feature/benefit bar below the hero slides. E.g. "Free Shipping", "24/7 Support".',
    }),

    /* ═══════ WELCOME ═══════ */
    defineField({
      name: 'welcomeTitle',
      title: 'Welcome Title',
      type: 'string',
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeBody',
      title: 'Welcome Content',
      type: 'array',
      of: portable,
      group: 'welcome',
      description: 'Rich text editor. You can add text, images, lists, and links.',
    }),
    defineField({
      name: 'welcomeCtaLabel',
      title: 'Button Text',
      type: 'string',
      group: 'welcome',
      description: 'E.g. "Learn More"',
    }),
    defineField({
      name: 'welcomeCtaHref',
      title: 'Button Link',
      type: 'string',
      group: 'welcome',
      description: 'E.g. /about or /make-an-enquiry',
    }),

    /* ═══════ STORE LINKS ═══════ */
    defineField({
      name: 'salesLinksTitle',
      title: 'Section Title',
      type: 'string',
      group: 'sales',
    }),
    defineField({
      name: 'salesLinksSubtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 3,
      group: 'sales',
    }),
    defineField({
      name: 'salesLinks',
      title: 'Store Cards',
      description: 'Large cards linking to external store websites. Maximum 2.',
      type: 'array',
      group: 'sales',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Store Name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'href', title: 'Web Address', type: 'url', validation: (Rule) => Rule.required()}),
            defineField({name: 'image', title: 'Logo / Image', type: 'image', options: {hotspot: true}}),
          ],
          preview: {select: {title: 'title', subtitle: 'href'}},
        },
      ],
      validation: (Rule) => Rule.max(2),
    }),
  ],
  preview: {prepare: () => ({title: 'Home Page'})},
})
