import sortBy from 'just-sort-by'

export default {
  name: 'modules',
  type: 'array',
  of: sortBy(
    [
      { type: 'introHero' },
      { type: 'scrambler' },
      { type: 'bigText' },
      { type: 'list' },
      { type: 'marquee' },
      { type: 'projectCarousels' },
      { type: 'divider' },
      { type: 'spacer' },
    ],
    'type',
  ),
}
