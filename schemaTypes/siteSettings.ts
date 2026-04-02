import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  description: 'General site settings: logo, contact details, default SEO values and social media links.',
  groups: [
    {name: 'general', title: '⚙️ General', default: true},
    {name: 'contact', title: '📞 Contact'},
    {name: 'social', title: '🌐 Social Media'},
    {name: 'categoryCta', title: '📢 Category CTA Defaults'},
  ],
  fields: [
    /* ═══════ GENERAL ═══════ */
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'general',
      description: 'Default title shown in the browser tab.',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      group: 'general',
      description: 'Default meta description shown in search engines.',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      group: 'general',
      options: {
        hotspot: true,
      },
      description: 'Logo displayed in the header.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Social Media Image',
      type: 'image',
      options: {hotspot: true},
      group: 'general',
      description: 'Default image shown when pages are shared on social media.',
    }),
    defineField({
      name: 'searchPlaceholder',
      title: 'Search Box Placeholder',
      type: 'string',
      group: 'general',
      description: 'Placeholder text in the search box. E.g. "Search products..."',
    }),

    /* ═══════ CONTACT ═══════ */
    defineField({
      name: 'phones',
      title: 'Phone Numbers (Top Bar)',
      type: 'array',
      group: 'contact',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label (Optional)', type: 'string', description: 'E.g. "Sales", "Support"'},
            {name: 'number', title: 'Number', type: 'string', validation: (Rule) => Rule.required()},
          ],
        },
      ],
      description: 'Phone numbers shown in the black bar at the top of the page.',
    }),
    defineField({
      name: 'emails',
      title: 'Email Addresses (Top Bar)',
      type: 'array',
      group: 'contact',
      of: [{type: 'string'}],
      description: 'Email addresses shown in the black bar at the top of the page.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Primary Contact Email',
      type: 'string',
      group: 'contact',
      description: 'Primary email shown on the contact page.',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Primary Contact Phone',
      type: 'string',
      group: 'contact',
      description: 'Primary phone number shown on the contact page.',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      group: 'contact',
      description: 'Physical address shown on the contact page.',
    }),

    /* ═══════ SOCIAL MEDIA ═══════ */
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'social',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform Name', type: 'string', description: 'E.g. Facebook, LinkedIn, Instagram'},
            {name: 'url', title: 'Profile URL', type: 'url'},
          ],
        },
      ],
    }),

    /* ═══════ CATEGORY CTA DEFAULTS ═══════ */
    defineField({
      name: 'categoryCtaTitle',
      title: 'Default CTA Title',
      type: 'string',
      group: 'categoryCta',
      description: 'Default heading for the "Need help?" section at the bottom of category pages. Can be overridden on each page.',
    }),
    defineField({
      name: 'categoryCtaSubtitle',
      title: 'Default CTA Subtitle',
      type: 'text',
      rows: 2,
      group: 'categoryCta',
    }),
    defineField({
      name: 'categoryCtaPrimaryLabel',
      title: 'Primary Button Text',
      type: 'string',
      group: 'categoryCta',
    }),
    defineField({
      name: 'categoryCtaPrimaryHref',
      title: 'Primary Button Link',
      type: 'string',
      group: 'categoryCta',
    }),
    defineField({
      name: 'categoryCtaSecondaryLabel',
      title: 'Secondary Button Text',
      type: 'string',
      group: 'categoryCta',
    }),
    defineField({
      name: 'categoryCtaSecondaryHref',
      title: 'Secondary Button Link',
      type: 'string',
      group: 'categoryCta',
    }),
  ],
})
