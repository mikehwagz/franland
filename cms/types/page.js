export default {
  name: 'page',
  type: 'document',
  groups: [
    { name: 'modules', title: 'Modules', default: true },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'settings',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
      group: 'settings',
    },
    {
      name: 'description',
      type: 'string',
      group: 'settings',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      group: 'settings',
    },
    {
      name: 'themeColor',
      type: 'color',
      group: 'settings',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'modules',
      type: 'modules',
      group: 'modules',
    },
  ],
}
