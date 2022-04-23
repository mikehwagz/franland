import { component } from 'picoapp'
import { each, on, qsa, wrap } from 'martha'
import poll from '../lib/poll'

export default component((node, ctx) => {
  const els = qsa('[data-dynamic-text]', node)
  // let isAnimating = false
  let index = 0

  each(els, el => {
    el._json = JSON.parse(el.dataset.dynamicText)
  })

  const minLength = Math.min(...els.map(el => el._json.length))

  // const offClick = on(node, 'click', () => {
  //   if (isAnimating) return
  //   isAnimating = true

  poll(
    5000,
    done => {
      index = wrap(index + 1, minLength)

      each(els, el => {
        const text = el._json[index]
        gsap.to(el, {
          duration: 2,
          scrambleText: {
            text,
            chars: el._json
              .reduce((acc, x) => acc.concat(x), '')
              .replace('.', '')
              .replace(',', ''),
          },
          onComplete: () => {
            done()
          },
        })
      })
    },
    false,
  )

  // })

  return () => {
    offClick()
  }
})
