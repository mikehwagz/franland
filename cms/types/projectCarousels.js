import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji symbol="🎠" />

export default {
  name: 'projectCarousels',
  type: 'object',
  icon: Icon,
  fields: [
    {
      name: 'projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    },
  ],
  preview: {
    select: {
      projects: 'projects',
    },
    prepare: ({ projects }) => ({
      title: 'Project Carousels',
      subtitle: projects.length ? `${projects.length} projects` : ``,
    }),
  },
}
