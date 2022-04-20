import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="➗" />

export default {
  name: 'divider',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'dummy',
      type: 'boolean',
      initialValue: true,
      hidden: true,
    },
  ],
  preview: {
    prepare: () => ({ title: 'Divider' }),
  },
}
