import sortBy from 'just-sort-by'

export default {
  name: 'modules',
  type: 'array',
  of: sortBy(
    [
      { type: 'playground' },
      { type: 'bigButton' },
      { type: 'bigLists' },
      { type: 'bigMedia' },
      { type: 'bigText' },
      { type: 'divider' },
      { type: 'featuredWork' },
      { type: 'news' },
      { type: 'projectList' },
      { type: 'squiggle' },
      { type: 'processAccordions' },
      { type: 'sampleTimelines' },
      { type: 'colophon' },
      { type: 'twoUpMedia' },
      { type: 'threeUpMedia' },
      { type: 'imageSequence' },
      { type: 'website' },
      { type: 'shapes' },
      { type: 'spacer' },
      {
        title: 'Reusable Module',
        name: 'reusableModule',
        type: 'reference',
        to: [{ type: 'reusableModule' }],
      },
    ],
    'type',
  ),
}
