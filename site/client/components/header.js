import { component } from 'picoapp'
import choozy from 'choozy'
import { on, rect, noop, each, toggle } from 'martha'
import { createFocusTrap } from 'focus-trap'
import gsap from 'gsap'

export default component((node, ctx) => {
  const { backdrop, links, btn, btnIcon } = choozy(node)

  each(links, link => {
    const url = new URL(link.getAttribute('href'), window.location.origin)
    toggle(
      link.firstElementChild,
      'bg-charcoal',
      url.pathname === window.location.pathname,
    )
  })

  ctx.on('resize', () => {
    gsap.set(node, {
      '--nav-height':
        links.reduce((acc, el) => acc + rect(el).height, 0) + 'px',
    })
  })

  const trap = createFocusTrap(node, {
    escapeDeactivates: false,
  })

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.5,
      ease: 'quart',
    },
  })

  let offClick = on([btn, backdrop], 'click', () => {
    ctx.emit('menu:toggle', { isMenuOpen: !ctx.getState().isMenuOpen })
  })

  let offKeydown = noop

  ctx.on('menu:toggle', ({ isMenuOpen }) => {
    tl.clear()

    if (isMenuOpen) {
      offKeydown = on(document, 'keydown', ({ key }) => {
        if (key === 'Escape') {
          offKeydown()
          offKeydown = noop
          ctx.emit('menu:toggle', { isMenuOpen: false })
        }
      })

      tl.set(node, { '--nav-visibility': 'visible' }).add(() => trap.activate())
    } else {
      trap.deactivate()
    }

    tl.to(
      backdrop,
      {
        autoAlpha: isMenuOpen ? 1 : 0,
      },
      0,
    )
      .to(
        btnIcon,
        {
          rotation: isMenuOpen ? -45 : 0,
        },
        0,
      )
      .to(
        node,
        {
          '--clip-y': isMenuOpen ? 0 : 100,
        },
        0,
      )

    if (!isMenuOpen) {
      tl.set(node, { '--nav-visibility': 'hidden' })
    }

    tl.restart()
  })

  return () => {
    offClick()
    offKeydown()
    trap.deactivate()
  }
})
