import { component } from 'picoapp'
import choozy from 'choozy'
import { rect } from 'martha'
import io from '../lib/io'

export default component((node, ctx) => {
  let { inner, el } = choozy(node)
  let prevReps = 0
  let reps = 0

  ctx.on('resize', () => {
    let w = rect(el).width

    reps = Math.ceil(rect(node).width / w)

    if (reps !== prevReps) {
      while (inner.children.length > 1) {
        inner.children[inner.children.length - 1].remove()
      }

      for (let i = 0; i < reps; i++) {
        let clone = el.cloneNode(true)
        clone.setAttribute('aria-hidden', 'true')
        inner.append(clone)
      }
    }

    node.style.setProperty('--x', Math.round(w))

    prevReps = reps
  })

  let offIo = io(node, {
    enter: () => {
      inner.style.animationPlayState = null
    },
    exit: () => {
      inner.style.animationPlayState = 'paused'
    },
  })

  return () => offIo()
})
