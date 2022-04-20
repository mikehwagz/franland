import { component } from 'picoapp'
import { on } from 'martha'
import gsap from 'gsap'

export default component((node, ctx) => {
  let offClick = on(node, 'click', () => {
    const scroll = { y: window.scrollY }

    gsap.to(scroll, {
      y: 0,
      duration: 0.8,
      ease: 'quart.inOut',
      onUpdate: () => window.scroll(0, scroll.y),
    })
  })

  return () => {
    offClick()
  }
})
