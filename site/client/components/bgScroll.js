import { component } from 'picoapp'
import { each, qsa } from 'martha'
import { scrollPercentage } from '../lib/inview'
import gsap from 'gsap'

export default component((node, ctx) => {
  const els = qsa('[data-color]', node)
  const page = qsa('[a-page]').pop()

  ctx.on('tick', ({ wh }) => {
    each(els, el => {
      const percent = scrollPercentage(el, wh)
      if (percent > 0.3) {
        gsap.to(page, {
          '--theme-color': el.dataset.color,
          '--footer-color': el.dataset.color,
          ease: 'power1',
          duration: 1,
        })
      }
    })
  })
})
