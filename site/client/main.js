import './style.css'
import 'focus-visible'
import { listen } from 'quicklink'
import { on, size } from 'martha'
import { create } from 'alio'
import app from './app'
import fonts from './lib/fonts'
import transition from './lib/transition'

gsap.registerPlugin(ScrambleTextPlugin)

main()

async function main() {
  if (process.env.NODE_ENV === 'production') listen()

  on(window, 'resize', resize)
  on(document, 'mousemove', mousemove)
  gsap.ticker.add(tick)

  await fonts([
    { family: 'General Sans', options: { weight: 400 } },
    { family: 'General Sans', options: { weight: 600 } },
    { family: 'Besley' },
  ])

  const pjax = create({
    transitions: {
      default: transition,
    },
  })

  pjax.on('beforeLeave', () => {
    app.unmount()
  })

  pjax.on('beforeEnter', () => {
    mount()
  })

  mount()
}

function mount() {
  app.mount()
  resize()
}

function resize() {
  let s = size()
  document.documentElement.style.setProperty('--100-vh', s.wh + 'px')
  app.emit('resize', s)
}

function tick() {
  app.emit('tick')
}

function mousemove({ x, y }) {
  app.emit('mousemove', { mx: x, my: y })
}
