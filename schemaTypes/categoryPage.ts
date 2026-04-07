import {defineField, defineType} from 'sanity'
import {resolveRoutePathFromDoc, validateUrlPathString} from './urlPathValidation'

export default defineType({
  name: 'categoryPage',
  title: 'Category Page',
  type: 'document',
  description:
    'Defines the page content for each URL route. For example /fluid-handling or /lubricants/castrol.',
  groups: [
    {name: 'content', title: '📝 Content', default: true},
    {name: 'seo', title: '🔍 SEO'},
    {name: 'cta', title: '📢 Bottom CTA'},
    {name: 'downloads', title: '📎 Downloads'},
  ],
  fields: [
    /* ═══════ CONTENT GROUP ═══════ */
    defineField({
      name: 'path',
      title: 'URL Path',
      type: 'string',
      group: 'content',
      placeholder: '/products/electronics',
      description:
        'The page address on the website. Example: /fluid-handling/oil-pumps. If linked to a Product Category, it must match that category\'s URL path exactly.',
      validation: (Rule) => [
        Rule.required().custom((val) => validateUrlPathString(val)),
        Rule.custom(async (pathValue, context) => {
          const format = validateUrlPathString(pathValue)
          if (format !== true) return true
          const ref = context.document?.productCategory?._ref
          if (!ref) return true
          const client = context.getClient({apiVersion: '2024-01-01'})
          const row = await client.fetch(`*[_id == $id][0]{ "rp": routePath }`, {id: ref})
          const catPath = resolveRoutePathFromDoc(row?.rp)
          if (!catPath || pathValue === catPath) return true
          return `This URL path differs from the linked category's path (${catPath}). They must match, otherwise a 404 error will occur.`
        }).warning(),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Page Title (H1)',
      type: 'string',
      group: 'content',
      description: 'The main heading of the page. If left empty, the menu label will be used.',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction Text',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
      description:
        'The description/introduction section shown below the page title. On parent category pages, this text also feeds the subcategory card blurb when the Product Category “Description” field is empty.',
    }),
    defineField({
      name: 'productCategory',
      title: 'Linked Product Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      group: 'content',
      description:
        'Which product category\'s products should be listed on this page? Also applies to pages with subcategories.',
    }),

    /* ═══════ SEO GROUP ═══════ */
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'The title shown in the browser tab and search results.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'The short description shown below the page in search results (150-160 characters ideal).',
    }),

    /* ═══════ CTA GROUP ═══════ */
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'cta',
      description: 'The call-to-action heading at the bottom of the page. If left empty, the default from Site Settings will be used.',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle',
      type: 'text',
      rows: 2,
      group: 'cta',
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      title: 'Primary Button Text',
      type: 'string',
      group: 'cta',
      description: 'E.g. "Contact Us"',
    }),
    defineField({
      name: 'ctaPrimaryHref',
      title: 'Primary Button Link',
      type: 'string',
      group: 'cta',
      description: 'E.g. /make-an-enquiry',
    }),
    defineField({
      name: 'ctaSecondaryLabel',
      title: 'Secondary Button Text',
      type: 'string',
      group: 'cta',
      description: 'E.g. "1300 917 946"',
    }),
    defineField({
      name: 'ctaSecondaryHref',
      title: 'Secondary Button Link',
      type: 'string',
      group: 'cta',
      description: 'E.g. tel:1300917946',
    }),

    /* ═══════ DOWNLOADS GROUP ═══════ */
    defineField({
      name: 'pdfDownloads',
      title: 'PDF Downloads',
      type: 'array',
      group: 'downloads',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'PDF Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'text',
              rows: 2,
              description: 'Optional. Shown under the title on download cards (same idea as Catalogue Library).',
            }),
            defineField({
              name: 'file',
              title: 'PDF File',
              type: 'file',
              options: {accept: '.pdf'},
              description: 'Upload the file here. Alternatively, use the URL field below.',
            }),
            defineField({
              name: 'externalUrl',
              title: 'External PDF Link',
              type: 'url',
              description: 'If you want to use an external PDF URL instead of uploading a file, enter it here.',
            }),
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail (Optional)',
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
      description: 'PDF documents specific to this page. You can add multiple.',
    }),
  ],
  preview: {
    select: {path: 'path', title: 'title'},
    prepare({path, title}) {
      return {title: title || path || 'Category page', subtitle: path}
    },
  },
})
