import { picoapp } from 'picoapp'
import { size } from 'martha'
import { isMobile } from './lib/detect'

import header from './components/header'
import menuToggle from './components/menuToggle'
import marquee from './components/marquee'
import img from './components/img'
import video from './components/video'
import scramble from './components/scramble'

let components = {
  header,
  menuToggle,
  marquee,
  img,
  video,
  scramble,
}

let s = size()
let state = {
  ...s,
  mx: 0,
  my: 0,
  isMenuOpen: false,
  isMobile: isMobile,
}

export default picoapp(components, state)
