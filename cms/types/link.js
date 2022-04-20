export default {
  name: 'link',
  type: 'array',
  of: [
    { type: 'externalLink' },
    { type: 'pageLink' },
    { type: 'projectLink' },
    { type: 'contactLink' },
  ],
}
