import { component } from 'picoapp'
import { add, remove, each, lerp, qs, qsa, map, wrap, rect } from 'martha'
import hover from '../lib/hover'
import gsap from 'gsap'

export default component((node, ctx) => {
  const els = qsa('[data-dynamic-text]', node)
  const imgWrap = qs('.js-imgWrap', node)
  const textWrap = qs('.js-textWrap', node)
  const text = qs('.js-text', node)
  const refText = qs('.js-refText', node)
  const imgs = qsa('[data-index]', node)
  const speed = +node.dataset.speed

  const hoverTl = gsap.timeline({ paused: true, defaults: { ease: 'expo' } })
  const imgTl = gsap.timeline({ paused: true, defaults: { ease: 'expo' } })
  const scrambleTl = gsap.timeline({ repeat: -1 })

  let cx = 0
  let cy = 0

  each(els, el => {
    el._json = JSON.parse(el.dataset.dynamicText)
  })

  updateImgs({
    index: 0,
    duration: 0,
  })

  if (ctx.getState().isMobile && imgWrap) {
    gsap.set(imgWrap, { autoAlpha: 1 })
  }

  const minLength = Math.min(...els.map(el => el._json.length))

  each(els, el => {
    const chars = el._json
      .reduce((acc, x) => acc.concat(x), '')
      .replace('.', '')
      .replace(',', '')

    each(el._json, (_, i) => {
      const index = wrap(i + 1, minLength)
      const text = el._json[index]
      const pos = speed * (i + 1) + i

      scrambleTl
        .add(() => updateImgs({ index }))
        .to(
          el,
          {
            duration: 1,
            scrambleText: {
              text,
              chars,
            },
          },
          pos,
        )
    })
  })

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

  function updateImgs({ index, duration = 0.5 }) {
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

  ctx.on('resize', () => {
    const lineHeight = rect(refText).height
    const lineCount = rect(text).height / lineHeight

    textWrap.style.minHeight = lineHeight * (lineCount + 1) + 'px'
  })

  return () => {
    scrambleTl.kill()
    offHover()
  }
})
