import { component } from 'picoapp'
import { toggle } from 'martha'

export default component((node, ctx) => {
  ctx.on('tick', ({ wh }) => {
    toggle(node, '-translate-y-full', window.scrollY < wh)
  })

  return () => {}
})
