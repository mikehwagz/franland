import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="📝" />

export default {
  name: 'pageLink',
  icon: Icon,
  type: 'object',
  fields: [
    {
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      description: 'This is optional. It will default to the page title.',
      type: 'string',
    },
    {
      name: 'openInNewTab',
      title: 'Open in a new tab?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      pageTitle: 'page.title',
    },
    prepare: ({ title, pageTitle }) => ({ title: title || pageTitle }),
  },
}
