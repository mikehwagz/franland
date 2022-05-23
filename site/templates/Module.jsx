import { h } from 'hyposcript'
import cx from 'classnames'

import Divider from './Divider'
import IntroHero from './IntroHero'
import Scrambler from './Scrambler'
import BigText from './BigText'
import List from './List'
import Marquee from './Marquee'
import ProjectCarousels from './ProjectCarousels'

const MODULES = {
  divider: Divider,
  introHero: IntroHero,
  scrambler: Scrambler,
  bigText: BigText,
  list: List,
  marquee: Marquee,
  projectCarousels: ProjectCarousels,
}

export default function Module({ data, index, site }) {
  if (data._type === 'spacer') {
    return (
      <section
        class={cx('h-0 first:mt-0', {
          'mt-50 m:mt-65 l:mt-100': data.size === 'S',
          'mt-75 m:mt-100 l:mt-150': data.size === 'M',
          'mt-100 m:mt-130 l:mt-200': data.size === 'L',
        })}
      ></section>
    )
  }

  const Component = MODULES[data._type]

  return Component ? (
    <section class={cx('relative', { 'pt-75 m:pt-90': index === 0 })}>
      <Component data={data} site={site} />
    </section>
  ) : null
}
