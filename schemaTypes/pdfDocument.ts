import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pdfDocument',
  title: 'PDF Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "Data Sheet", "Installation Manual", "SDS", "Brochure"',
      options: {
        list: [
          {title: 'Data Sheet', value: 'Data Sheet'},
          {title: 'Installation Manual', value: 'Installation Manual'},
          {title: 'User Guide', value: 'User Guide'},
          {title: 'Brochure', value: 'Brochure'},
          {title: 'SDS / Safety Data Sheet', value: 'SDS'},
          {title: 'Technical Manual', value: 'Technical Manual'},
          {title: 'Catalogue', value: 'Catalogue'},
          {title: 'Other', value: 'Other'},
        ],
      },
    }),
    defineField({
      name: 'file',
      title: 'PDF File',
      type: 'file',
      options: {accept: '.pdf'},
      description: 'Upload a PDF file, OR use External URL below',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL (fallback)',
      type: 'url',
      description: 'Use this if the PDF is hosted externally (e.g. manufacturer website)',
    }),
    defineField({
      name: 'relatedCategory',
      title: 'Related Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      description: 'Which product category does this PDF belong to?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label',
    },
  },
})
