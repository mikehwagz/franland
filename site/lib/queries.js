import groq from 'groq'

export const link = additionalGroq => groq`{
  _type,
  openInNewTab,
  defined(title) => {
    title,
  },
  _type == 'pageLink' => {
    'slug': page->slug.current,
    'isHomepage': *[_type == 'site'][0].homepage._ref == page->_id,
  },
  _type == 'externalLink' => {
    url,
  },
  ${additionalGroq}
}`

export const image = groq`{
  ...(asset-> {
    '_id': _id,
    'lqip': metadata.lqip,
    'alt': altText,
    'aspect': metadata.dimensions.aspectRatio,
  }),
}`

export const video = groq`{
  poster ${image},
  'mp4': mp4.asset->url,
}`

export const media = groq`{
  _type,
  _type == 'image' => ${image},
  _type == 'video' => ${video},
}`

export const modules = groq`{
  _type,
  _type == 'divider' => {},
  _type == 'introHero' => {
    introCopy,
  },
  _type == 'spacer' => {
    size,
  },
}`

export const site = groq`'site': *[_type == 'site'] | order(_updatedAt desc)[0] {
  url,
  title,
  description,
  openGraphImage ${image},
  menuLinks[] ${link(groq`
    hoverText,
  `)},
  footerLinks[] ${link()},
  copyrightText,
}`

export const page = groq`{
  title,
  'slug': slug.current,
  'isHomepage': *[_type == 'site'][0].homepage._ref == @._id,
  description,
  openGraphImage ${image},
  modules[] ${modules},
}`
