import Page from '../templates/Page'
import { getSlugs, getPage } from '../lib/api'

export async function getStaticPaths() {
  const slugs = await getSlugs('page')
  return slugs.map(slug => `/${slug}`)
}

export async function handler(ev) {
  const slug = ev.path.slice(1)
  const props = await getPage({ slug })
  return {
    html: Page(props),
  }
}
