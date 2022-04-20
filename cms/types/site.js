export default {
  name: 'site',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'menu', title: 'Menu', default: true },
    { name: 'footer', title: 'Footer' },
    { name: 'seo', title: 'Default SEO' },
  ],
  fields: [
    {
      name: 'menuLinks',
      type: 'link',
      validation: Rule => Rule.required().min(3).max(3),
      group: 'menu',
    },
    {
      name: 'ctas',
      title: 'CTAs',
      type: 'link',
      group: 'menu',
    },
    {
      name: 'footerMarquee',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'footer',
    },
    {
      name: 'footerLinks',
      type: 'link',
      validation: Rule => Rule.required(),
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
