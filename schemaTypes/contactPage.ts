import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Page title', type: 'string', initialValue: 'Contact Us'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text', rows: 2}),
    defineField({
      name: 'useSiteSettingsContact',
      title: 'Use contact details from Site settings',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({name: 'locationLabel', title: 'Location label override', type: 'string'}),
    defineField({name: 'locationText', title: 'Location text override', type: 'text', rows: 2}),
    defineField({
      name: 'hours',
      title: 'Business hours',
      type: 'object',
      fields: [
        defineField({name: 'weekdays', title: 'Monday – Friday', type: 'string'}),
        defineField({name: 'saturday', title: 'Saturday', type: 'string'}),
        defineField({name: 'sunday', title: 'Sunday', type: 'string'}),
      ],
    }),
    defineField({name: 'formSectionTitle', title: 'Form section title', type: 'string'}),
    defineField({name: 'fieldFirstName', title: 'First name label', type: 'string'}),
    defineField({name: 'fieldLastName', title: 'Last name label', type: 'string'}),
    defineField({name: 'fieldEmail', title: 'Email label', type: 'string'}),
    defineField({name: 'fieldPhone', title: 'Phone label', type: 'string'}),
    defineField({name: 'fieldMessage', title: 'Message label', type: 'string'}),
    defineField({name: 'submitLabel', title: 'Submit button', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Contact page'})},
})
