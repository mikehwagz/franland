import { component } from 'picoapp'

export default component((node, ctx) => {
  const toRadians = degrees => (degrees * Math.PI) / 180

  ctx.on('resize', ({ ww }) => {
    const b = ww
    const c = b / Math.cos(toRadians(13)) // hypotenuse
    const a = Math.sqrt(c * c - b * b) // height

    document.documentElement.style.setProperty('--divider', a)
  })

  return () => {}
})
