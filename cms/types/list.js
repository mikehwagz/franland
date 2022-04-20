import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="✅" />

export default {
  name: 'list',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'listItems',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: { subtitle: 'title' },
    prepare: ({ subtitle }) => ({
      title: 'List',
      subtitle,
    }),
  },
}
