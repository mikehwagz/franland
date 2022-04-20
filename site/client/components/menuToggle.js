import { component } from 'picoapp'
import { qsa, on } from 'martha'

export default component((node, ctx) => {
  let labels = qsa('.js-labels')

  const tl = gsap.timeline({
    paused: true,
  })

  let offClick = on(node, 'click', () => {
    ctx.emit('menu:toggle', { isMenuOpen: !ctx.getState().isMenuOpen })
  })

  ctx.on('menu:toggle', ({ isMenuOpen }) => {
    tl.clear()
      .set(labels, {
        yPercent: isMenuOpen ? 0 : 100,
      })
      .to(labels, {
        yPercent: isMenuOpen ? 100 : 0,
        duration: isMenuOpen ? 0.8 : 0.5,
        ease: isMenuOpen ? 'expo' : 'expo.inOut',
      })
      .restart()
  })

  return () => {
    offClick()
  }
})
