import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="🪐" />

export default {
  name: 'spacer',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'size',
      type: 'string',
      initialValue: 'S',
      options: {
        list: ['S', 'M', 'L'],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: { size: 'size' },
    prepare: ({ size }) => ({ title: 'Spacer', subtitle: size }),
  },
}
