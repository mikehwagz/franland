import { component } from 'picoapp'
import { each, on, qsa } from 'martha'

export default component((node, ctx) => {
  const els = qsa('[data-to]', node)
  let isAnimating = false

  let offClick = on(node, 'click', () => {
    if (isAnimating) return
    isAnimating = true

    each(els, el => {
      let text = el.dataset.to
      el.setAttribute('data-to', el.textContent)
      gsap.to(el, {
        duration: 2,
        scrambleText: {
          text,
          chars: (text + el.textContent).replace('.', '').replace(',', ''),
        },
        onComplete: () => {
          isAnimating = false
        },
      })
    })
  })

  return () => {
    offClick()
  }
})
