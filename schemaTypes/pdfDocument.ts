import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pdfDocument',
  title: 'PDF Document',
  type: 'document',
  description:
    'Central PDF library. PDFs here are linked to specific product categories and can be listed on the Resources page. Note: PDFs specific to a category page are added from that page\'s "Downloads" tab instead.',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The title of the PDF. E.g. "Castrol GTX 15W-40 Data Sheet"',
    }),
    defineField({
      name: 'label',
      title: 'Document Type',
      type: 'string',
      description: 'The category/type of this document.',
      options: {
        list: [
          {title: '📊 Data Sheet', value: 'Data Sheet'},
          {title: '🔧 Installation Manual', value: 'Installation Manual'},
          {title: '📖 User Guide', value: 'User Guide'},
          {title: '📰 Brochure', value: 'Brochure'},
          {title: '⚠️ SDS / Safety Data Sheet', value: 'SDS'},
          {title: '🔬 Technical Manual', value: 'Technical Manual'},
          {title: '📚 Catalogue', value: 'Catalogue'},
          {title: '📄 Other', value: 'Other'},
        ],
      },
    }),
    defineField({
      name: 'file',
      title: 'PDF File',
      type: 'file',
      options: {accept: '.pdf'},
      description: 'Upload the PDF file here. Alternatively, use the URL field below.',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External PDF Link',
      type: 'url',
      description: 'If the PDF is hosted externally (e.g. manufacturer website), use this field.',
    }),
    defineField({
      name: 'relatedCategory',
      title: 'Related Product Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      description: 'Which product category is this PDF related to?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label',
    },
  },
})
