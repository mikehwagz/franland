export default {
  name: 'media',
  type: 'array',
  of: [{ type: 'image' }, { type: 'video' }],
  options: { layout: 'grid' },
}
