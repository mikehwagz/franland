import { component } from 'picoapp'
import { on } from 'martha'
import choozy from 'choozy'
import createCarousel from 'embla-carousel'

export default component((node, ctx) => {
  let { carousel, next, prev, current } = choozy(node)

  const embla = createCarousel(carousel, { loop: true })

  let evs = [
    on(prev, 'click', () => embla.scrollPrev()),
    on(next, 'click', () => embla.scrollNext()),
  ]

  embla.on('select', () => {
    current.textContent = embla.selectedScrollSnap() + 1
  })

  return () => {
    embla.destroy()
    evs.map(off => off())
  }
})
