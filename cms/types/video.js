export default {
  name: 'video',
  type: 'object',
  fields: [
    {
      name: 'poster',
      type: 'image',
    },
    {
      name: 'mp4',
      title: 'MP4',
      type: 'file',
    },
  ],
  preview: {
    select: { media: 'poster' },
  },
}
