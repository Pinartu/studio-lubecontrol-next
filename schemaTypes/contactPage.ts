import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  description: 'Edit the content and form fields of the contact page from here.',
  groups: [
    {name: 'general', title: '📝 General', default: true},
    {name: 'hours', title: '🕐 Business Hours'},
    {name: 'form', title: '📋 Form Fields'},
  ],
  fields: [
    /* ═══════ GENERAL ═══════ */
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact Us',
      group: 'general',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction Text',
      type: 'text',
      rows: 2,
      group: 'general',
      description: 'Short description shown below the title.',
    }),
    defineField({
      name: 'useSiteSettingsContact',
      title: 'Use contact info from Site Settings',
      type: 'boolean',
      initialValue: true,
      group: 'general',
      description:
        'When enabled, phone, email and address are pulled automatically from "Site Settings". Disable this to use the custom fields below.',
    }),
    defineField({
      name: 'locationLabel',
      title: 'Location Label (Custom)',
      type: 'string',
      group: 'general',
      description: 'Only used when the option above is disabled.',
    }),
    defineField({
      name: 'locationText',
      title: 'Location Text (Custom)',
      type: 'text',
      rows: 2,
      group: 'general',
      description: 'Only used when the option above is disabled.',
    }),

    /* ═══════ BUSINESS HOURS ═══════ */
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'object',
      group: 'hours',
      fields: [
        defineField({name: 'weekdays', title: 'Monday – Friday', type: 'string', description: 'E.g. 8:00 AM – 5:00 PM'}),
        defineField({name: 'saturday', title: 'Saturday', type: 'string', description: 'E.g. 9:00 AM – 12:00 PM'}),
        defineField({name: 'sunday', title: 'Sunday', type: 'string', description: 'E.g. Closed'}),
      ],
    }),

    /* ═══════ FORM ═══════ */
    defineField({
      name: 'formSectionTitle',
      title: 'Form Section Title',
      type: 'string',
      group: 'form',
      description: 'Heading above the form. E.g. "Send us a message"',
    }),
    defineField({name: 'fieldFirstName', title: '"First Name" Field Label', type: 'string', group: 'form'}),
    defineField({name: 'fieldLastName', title: '"Last Name" Field Label', type: 'string', group: 'form'}),
    defineField({name: 'fieldEmail', title: '"Email" Field Label', type: 'string', group: 'form'}),
    defineField({name: 'fieldPhone', title: '"Phone" Field Label', type: 'string', group: 'form'}),
    defineField({name: 'fieldMessage', title: '"Message" Field Label', type: 'string', group: 'form'}),
    defineField({
      name: 'submitLabel',
      title: 'Submit Button Text',
      type: 'string',
      group: 'form',
      description: 'E.g. "Send Message"',
    }),
  ],
  preview: {prepare: () => ({title: 'Contact Page'})},
})
