import { component } from 'picoapp'
import { add, remove, each, lerp, on, qs, qsa, wrap, map, norm } from 'martha'
import poll from '../lib/poll'
import hover from '../lib/hover'

export default component((node, ctx) => {
  const els = qsa('[data-dynamic-text]', node)
  const imgWrap = qs('.js-imgWrap', node)
  const imgs = qsa('[data-index]', node)

  const hoverTl = gsap.timeline({ paused: true, defaults: { ease: 'expo' } })
  const imgTl = gsap.timeline({ paused: true, defaults: { ease: 'expo' } })

  let index = 0
  let cx = 0
  let cy = 0

  each(els, el => {
    el._json = JSON.parse(el.dataset.dynamicText)
  })

  updateImgs(0)

  if (ctx.getState().isMobile && imgWrap) {
    gsap.set(imgWrap, { autoAlpha: 1 })
  }

  const minLength = Math.min(...els.map(el => el._json.length))

  const offPoll = poll(
    5000,
    done => {
      index = wrap(index + 1, minLength)

      updateImgs()

      each(els, el => {
        const text = el._json[index]
        gsap.to(el, {
          duration: 1,
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

  const offHover = hover(node, {
    enter: () => {
      if (ctx.getState().isMobile) return
      if (!imgWrap) return

      add(node.parentNode, 'z-1')
      hoverTl
        .clear()
        .fromTo(imgWrap, { autoAlpha: 0 }, { autoAlpha: 1 })
        .restart()
    },
    leave: () => {
      if (ctx.getState().isMobile) return
      if (!imgWrap) return

      remove(node.parentNode, 'z-1')
      hoverTl
        .clear()
        .fromTo(imgWrap, { autoAlpha: 1 }, { autoAlpha: 0 })
        .restart()
    },
  })

  ctx.on('tick', ({ mx, my, ww, wh }) => {
    if (ctx.getState().isMobile) return
    if (!imgWrap) return

    cx = lerp(cx, map(mx, 0, ww, -10, 10), 0.2)
    cy = lerp(cy, map(my, 0, wh, -10, 10), 0.2)

    gsap.set(imgWrap, {
      x: cx,
      y: cy,
    })
  })

  function updateImgs(duration = 0.5) {
    imgTl.clear()
    each(imgs, img => {
      const isActive = +img.dataset.index === index
      imgTl.to(
        img,
        {
          autoAlpha: isActive ? 1 : 0,
          duration,
        },
        isActive ? 0.5 : 0,
      )
    })
    imgTl.restart()
  }

  return () => {
    offPoll()
    offHover()
  }
})
