import Page from '../templates/Page'
import { getHomepage } from '../lib/api'

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  const props = await getHomepage()
  return {
    html: Page(props),
  }
}
