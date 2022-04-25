import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="🍳" />

export default {
  name: 'scrambler',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'content',
      type: 'array',
      of: [
        {
          name: 'staticText',
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'text',
            },
          },
        },
        {
          name: 'dynamicText',
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: {
              text: 'text',
            },
            prepare: ({ text }) => ({
              title: text?.join(' | ') ?? '',
            }),
          },
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          description: 'Recommended dimensions for these images: 612x766',
        },
        {
          name: 'noImage',
          type: 'object',
          fields: [
            {
              name: 'dummy',
              type: 'boolean',
              initialValue: true,
              hidden: true,
            },
          ],
          preview: {
            prepare: () => ({ title: 'No Image' }),
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'color',
    },
  ],
  preview: {
    select: {
      content: 'content',
      backgroundColor: 'backgroundColor.hex',
    },
    prepare: ({ content, backgroundColor }) => ({
      title: 'Scrambler',
      subtitle:
        content
          ?.map(item => (item._type === 'staticText' ? item.text : '___'))
          ?.join(' ') ?? '',
      media: backgroundColor ? (
        <div style={{ width: '100%', height: '100%', backgroundColor }}></div>
      ) : null,
    }),
  },
}
