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
      description:
        'Create a hyperlink like so [This is a link](https://google.com)',
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
