import { picoapp } from 'picoapp'
import { size } from 'martha'
import { isMobile } from './lib/detect'

import header from './components/header'
import marquee from './components/marquee'
import img from './components/img'
import video from './components/video'
import scramble from './components/scramble'
import backToTop from './components/backToTop'

let components = {
  header,
  marquee,
  img,
  video,
  scramble,
  backToTop,
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
