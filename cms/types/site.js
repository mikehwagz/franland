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
      name: 'logo',
      type: 'image',
      description:
        'Please upload an SVG logo. For reference, the text color hex code is #2F3336. Make sure the logo is legible at a minimum height of 18px.',
      group: 'settings',
      options: {
        accept: '.svg',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'homepage',
      type: 'reference',
      to: [{ type: 'page' }],
      group: 'settings',
      validation: Rule => Rule.required(),
    },
    {
      name: 'scramblerSpeed',
      type: 'number',
      initialValue: 3,
      group: 'settings',
      description: 'Set the scrambler module delay in seconds',
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
    {
      name: 'noindex',
      title: 'Discourage search engines from indexing this site?',
      description: 'It is up to search engines to honor this request.',
      type: 'boolean',
      group: 'seo',
    },
  ],
}
