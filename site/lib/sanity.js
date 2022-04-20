import createSanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  dataset: process.env.SANITY_PROJECT_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createSanityClient(options)
export const imageBuilder = sanityImage(sanityClient)

export function createPreviewClient() {
  return createSanityClient({
    ...options,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })
}

export function getSanityClient(preview) {
  if (preview) {
    return createPreviewClient()
  } else {
    return sanityClient
  }
}
