import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoryPage',
  title: 'Category / route page',
  type: 'document',
  fields: [
    defineField({
      name: 'path',
      title: 'URL path',
      type: 'string',
      description: 'Full path starting with / e.g. /fluid-handling/oil-handling-equipment/oil-guns-and-oil-jug',
      validation: (Rule) =>
        Rule.required().custom((val) => {
          if (!val || typeof val !== 'string') return 'Required'
          if (!val.startsWith('/')) return 'Path must start with /'
          return true
        }),
    }),
    defineField({
      name: 'title',
      title: 'Page title (H1 override)',
      type: 'string',
      description: 'Leave empty to use navigation label',
    }),
    defineField({name: 'seoTitle', title: 'SEO title', type: 'string'}),
    defineField({name: 'seoDescription', title: 'SEO description', type: 'text', rows: 3}),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'productCategory',
      title: 'Products category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      description: 'For leaf pages: products listed under this category',
    }),
    defineField({name: 'ctaTitle', title: 'Bottom CTA title (optional override)', type: 'string'}),
    defineField({name: 'ctaSubtitle', title: 'Bottom CTA subtitle', type: 'text', rows: 2}),
    defineField({name: 'ctaPrimaryLabel', title: 'Bottom CTA primary button', type: 'string'}),
    defineField({name: 'ctaPrimaryHref', title: 'Bottom CTA primary link', type: 'string'}),
    defineField({name: 'ctaSecondaryLabel', title: 'Bottom CTA secondary button', type: 'string'}),
    defineField({name: 'ctaSecondaryHref', title: 'Bottom CTA secondary link', type: 'string'}),
    defineField({
      name: 'pdfDownloads',
      title: 'PDF downloads',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'PDF title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'file',
              title: 'PDF file',
              type: 'file',
              options: {accept: '.pdf'},
            }),
            defineField({
              name: 'externalUrl',
              title: 'External PDF URL',
              type: 'url',
              description: 'Optional: if you want to use a remote PDF link instead of uploading a file',
            }),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail (optional)',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {
            select: {title: 'title'},
            prepare({title}) {
              return {title: title || 'PDF'}
            },
          },
        },
      ],
      description: 'Add multiple PDFs. You can either upload a file or provide an external URL.',
    }),
  ],
  preview: {
    select: {path: 'path', title: 'title'},
    prepare({path, title}) {
      return {title: title || path || 'Category page', subtitle: path}
    },
  },
})
