import Page from '../templates/Page'
import { getPage } from '../lib/api'

export const route = '/preview/:slug'

export async function handler(ev) {
  const props = await getPage({
    slug: ev.pathParameters.slug,
    preview: true,
  })

  return {
    html: Page(props),
  }
}
