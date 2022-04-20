import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="🌐" />

export default {
  name: 'externalLink',
  icon: Icon,
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({ scheme: ['http', 'https', 'tel', 'mailto'] }),
    },
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
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
    },
  },
}
