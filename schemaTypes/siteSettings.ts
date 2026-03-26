import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      description: 'Default browser tab title',
    }),
    defineField({
      name: 'description',
      title: 'Site description',
      type: 'text',
      rows: 3,
      description: 'Default meta description',
    }),
    defineField({
      name: 'logo',
      title: 'Site logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Default social / OG image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'phones',
      title: 'Phone numbers (header bar)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label (optional)', type: 'string'},
            {name: 'number', title: 'Number (tel: href)', type: 'string', validation: (Rule) => Rule.required()},
          ],
        },
      ],
    }),
    defineField({
      name: 'emails',
      title: 'Email addresses (header bar)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Primary contact email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Primary contact phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'searchPlaceholder',
      title: 'Search input placeholder',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),
    defineField({
      name: 'categoryCtaTitle',
      title: 'Category pages — bottom CTA title',
      type: 'string',
    }),
    defineField({
      name: 'categoryCtaSubtitle',
      title: 'Category pages — bottom CTA subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'categoryCtaPrimaryLabel',
      title: 'Category CTA primary button',
      type: 'string',
    }),
    defineField({
      name: 'categoryCtaPrimaryHref',
      title: 'Category CTA primary link',
      type: 'string',
    }),
    defineField({
      name: 'categoryCtaSecondaryLabel',
      title: 'Category CTA secondary button',
      type: 'string',
    }),
    defineField({
      name: 'categoryCtaSecondaryHref',
      title: 'Category CTA secondary link',
      type: 'string',
    }),
  ],
})
