import groq from 'groq'
import { getSanityClient } from './sanity'
import * as queries from './queries'

export async function getSlugs(type) {
  return await getSanityClient().fetch(
    groq`*[_type == '${type}' && defined(slug.current) && length(modules) > 0][].slug.current`,
  )
}

export async function getPage({ slug, preview }) {
  const props = await getSanityClient(preview).fetch(groq`{
    ${queries.site},
    'page': *[_type == 'page' && slug.current == '${slug}' && length(modules) > 0] | order(_updatedAt desc)[0] ${queries.page},
  }`)

  return props
}

export async function getProject({ slug, preview }) {
  const props = await getSanityClient(preview).fetch(groq`{
    ${queries.site},
    'page': *[_type == 'project' && slug.current == '${slug}' && length(modules) > 0] | order(_updatedAt desc)[0] ${queries.project},
  }`)

  return props
}

export async function getSite() {
  const props = await getSanityClient(false).fetch(groq`{
    ${queries.site},
  }`)

  return props
}
