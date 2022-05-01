import { clamp, rect } from 'martha'

/**
 * Reports the current scroll percentage of an element within the viewport
 *
 * @param  {HTMLElement} el   Element to track
 * @param  {number}      vh   Current viewport height
 * @return {number}
 */
export function scrollPercentage(el, wh) {
  const bounds = rect(el)
  return 1 - clamp(bounds.bottom / (wh + bounds.height), 0, 1)
}

/**
 * Returns true if the provided element is currently within the viewport
 *
 * @param  {HTMLElement} el   Element to track
 * @param  {number}      vh   Current viewport height
 * @return {boolean}
 */
export function inview(el, wh) {
  const percent = scrollPercentage(el, wh)
  return percent > 0 && percent < 1
}
