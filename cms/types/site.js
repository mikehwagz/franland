import { customLink } from '../lib/customLink'

export default {
  name: 'site',
  type: 'document',
  // __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'settings', title: 'Settings', default: true },
    { name: 'menu', title: 'Menu' },
    { name: 'footer', title: 'Footer' },
    { name: 'seo', title: 'Default SEO' },
  ],
  fields: [
    {
      name: 'homepage',
      type: 'reference',
      to: [{ type: 'page' }],
      group: 'settings',
      validation: Rule => Rule.required(),
    },
    customLink({
      hasTitle: true,
      name: 'menuLinks',
      additionalFields: [
        {
          name: 'hoverText',
          description:
            'The title of the link will scramble to the specified text on hover. For the best effect, it should be as close to the same number of characters as possible.',
          type: 'string',
        },
      ],
      group: 'menu',
    }),
    customLink({
      hasTitle: true,
      name: 'footerLinks',
      group: 'footer',
    }),
    {
      name: 'copyrightText',
      description: 'Use %s to insert the current year',
      type: 'string',
      group: 'footer',
    },
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'seo',
    },
    {
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'seo',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required(),
      group: 'seo',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      group: 'seo',
    },
  ],
}
