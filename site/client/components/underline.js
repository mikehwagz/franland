import { noop } from 'martha'
import { component } from 'picoapp'
import io from '../lib/io'
import gsap from 'gsap'

export default component((node, ctx) => {
  const section = node.closest('section')

  let offIo = noop

  if (section) {
    offIo = io(section, {
      enter: () => {
        offIo()
        offIo = noop
        const len = Math.ceil(node.getTotalLength())
        gsap.fromTo(
          node,
          {
            strokeDasharray: len,
            strokeDashoffset: len,
          },
          {
            strokeDasharray: len,
            strokeDashoffset: 0,
            duration: 1,
            ease: 'cubic.inOut',
          },
        )
      },
    })
  }

  return () => {
    offIo()
  }
})
