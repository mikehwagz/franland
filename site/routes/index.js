import Page from '../templates/Page'
import { getHomepage } from '../lib/api'

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  const data = await getHomepage({ preview: false })
  return {
    html: Page(data),
  }
}
