import React from 'react'
import Emoji from 'a11y-react-emoji'
import { customLink } from '../lib/customLink'

const Icon = () => <Emoji symbol="💈" />

export default {
  name: 'marquee',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'text',
      description: 'Use %s to insert a squiggly arrow separator',
      type: 'string',
    },
    customLink({
      hasTitle: false,
      name: 'link',
    }),
  ],
  preview: {
    select: { text: 'text' },
    prepare: ({ text }) => ({
      title: 'Marquee',
      subtitle: text?.replaceAll('%s', '→') ?? '',
    }),
  },
}
