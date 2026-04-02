import {defineField, defineType} from 'sanity'
import {resolveRoutePathFromDoc, slugifyTitleSegment, validateUrlPathString} from './urlPathValidation'

export default defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  description: 'Categories that group products. Each category can contain products or subcategories.',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The name of the category. Shown on cards and listings.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'Auto-generated. Click the "Generate" button.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of the category. Shown on cards.',
    }),
    defineField({
      name: 'image',
      title: 'Card Image (Upload)',
      type: 'image',
      description:
        'Image shown on category cards. If both this and the URL field below are provided, the uploaded image takes priority.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'previewImageUrl',
      title: 'Card Image (URL)',
      type: 'url',
      description:
        'Use an external image URL instead of uploading a file. If a file is uploaded above, this field is ignored.',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      description: 'If this is a subcategory, select its parent category. Leave empty for top-level categories.',
    }),
    defineField({
      name: 'routePath',
      title: 'URL Path',
      type: 'slug',
      description:
        'The category\'s address on the website. Click "Generate" to create it automatically. If you edit it manually, make sure to also update the Category Page and Navigation menu.',
      placeholder: '/products/electronics',
      options: {
        source: 'title',
        slugify: async (source, _schemaType, context) => {
          const core = slugifyTitleSegment(source)
          if (!core) {
            return '/'
          }
          const doc = context.parent
          if (!doc || typeof doc !== 'object' || Array.isArray(doc)) {
            return `/${core}`
          }
          const parentRef = (doc as {parent?: {_ref?: string}}).parent?._ref
          if (!parentRef) {
            return `/${core}`
          }
          const client = context.getClient({apiVersion: '2024-01-01'})
          const row = await client.fetch(
            `*[_id == $id][0]{ "rp": routePath }`,
            {id: parentRef},
          )
          const parentPath = resolveRoutePathFromDoc(row?.rp)
          if (!parentPath) {
            return `/${core}`
          }
          const normalized = parentPath.replace(/\/$/, '')
          return `${normalized}/${core}`
        },
      },
      validation: (Rule) =>
        Rule.required().custom((value) => {
          const cur = value?.current?.trim()
          if (!cur) {
            return 'Enter the category name first, then click "Generate" to create the URL path.'
          }
          return validateUrlPathString(cur)
        }),
    }),
  ],
  preview: {
    select: {title: 'title', parentTitle: 'parent.title'},
    prepare({title, parentTitle}) {
      return {
        title: title || 'Category',
        subtitle: parentTitle ? `↳ Under ${parentTitle}` : 'Top-level category',
      }
    },
  },
})
