import React from 'react'
import Emoji from 'a11y-react-emoji'
import blocksToString from '../lib/blocksToString'
import { customLink } from '../lib/customLink'

const Icon = () => <Emoji symbol="🔤" />

export default {
  name: 'bigText',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                fields: [
                  customLink({
                    hasTitle: false,
                    name: 'link',
                    validation: Rule => Rule.required(),
                  }),
                ],
              },
            ],
            decorators: [],
          },
        },
      ],
    },
  ],
  preview: {
    select: { body: 'body' },
    prepare: ({ body }) => ({
      title: 'Big Text',
      subtitle: blocksToString(body),
    }),
  },
}
