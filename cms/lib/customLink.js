import React from 'react'
import Emoji from 'a11y-react-emoji'

const ExternalLinkIcon = () => <Emoji symbol="🌐" />
const PageLinkIcon = () => <Emoji symbol="📝" />

export function customLink({ hasTitle, additionalFields = [], ...rest }) {
  return {
    type: 'array',
    of: [
      {
        name: 'externalLink',
        icon: ExternalLinkIcon,
        type: 'object',
        fields: [
          hasTitle
            ? {
                name: 'title',
                type: 'string',
                validation: Rule => Rule.required(),
              }
            : null,
          {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: Rule =>
              Rule.required().uri({
                scheme: ['http', 'https', 'tel', 'mailto'],
              }),
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
          ...additionalFields,
        ].filter(Boolean),
        preview: {
          select: {
            title: hasTitle ? 'title' : 'url',
            subtitle: hasTitle ? 'url' : '',
          },
        },
      },
      {
        name: 'pageLink',
        icon: PageLinkIcon,
        type: 'object',
        fields: [
          hasTitle
            ? {
                name: 'title',
                type: 'string',
                validation: Rule => Rule.required(),
              }
            : null,
          {
            name: 'page',
            type: 'reference',
            to: [{ type: 'page' }],
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
          ...additionalFields,
        ].filter(Boolean),
        preview: {
          select: {
            title: 'title',
          },
        },
      },
    ],
    ...rest,
  }
}
