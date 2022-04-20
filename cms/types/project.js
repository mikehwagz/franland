import { customLink } from '../lib/customLink'

export default {
  name: 'project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'modules',
      type: 'array',
      of: [
        { type: 'image' },
        { type: 'video' },
        {
          name: 'richText',
          type: 'object',
          fields: [
            {
              name: 'content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading', value: 'h2' },
                  ],
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
        },
      ],
      options: { layout: 'grid' },
    },
    {
      name: 'backgroundColor',
      type: 'color',
    },
  ],
}
