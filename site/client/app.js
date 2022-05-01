import { picoapp } from 'picoapp'
import { size } from 'martha'
import { isMobile } from './lib/detect'

import header from './components/header'
import marquee from './components/marquee'
import img from './components/img'
import video from './components/video'
import scrambler from './components/scrambler'
import backToTop from './components/backToTop'
import projectCarousel from './components/projectCarousel'
import underline from './components/underline'
import bgScroll from './components/bgScroll'

let components = {
  header,
  marquee,
  img,
  video,
  scrambler,
  backToTop,
  projectCarousel,
  underline,
  bgScroll,
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
