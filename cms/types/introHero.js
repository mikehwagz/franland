import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="🏝" />

export default {
  name: 'introHero',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'introCopy',
      description: 'Wrap text in {curly braces} to underline',
      type: 'string',
    },
  ],
  preview: {
    select: {
      introCopy: 'introCopy',
    },
    prepare: ({ introCopy }) => ({
      title: 'Intro Hero',
      subtitle: introCopy?.replace('{', '')?.replace('}', '') ?? '',
    }),
  },
}
