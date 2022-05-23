import groq from 'groq'

export const link = (additionalGroq = '') => groq`{
  _type,
  openInNewTab,
  defined(title) => {
    title,
  },
  _type == 'pageLink' => {
    'isHomepage': *[_type == 'site'][0].homepage._ref == page->_id,
    ...(page-> {
      'slug': slug.current,
      'mobileMenuLinkColor': mobileMenuLinkColor.hex,
    }),
  },
  _type == 'externalLink' => {
    url,
  },
  ${additionalGroq}
}`

export const image = groq`{
  ...(asset-> {
    '_id': _id,
    'url': url,
    'lqip': metadata.lqip,
    'alt': altText,
    'aspect': metadata.dimensions.aspectRatio,
    'width': metadata.dimensions.width,
    'height': metadata.dimensions.height,
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
  _type == 'scrambler' => {
    content[] {
      _type,
      text,
    },
    images[] {
      _type,
      ...(${image}),
    },
    'backgroundColor': backgroundColor.hex,
  },
  _type == 'bigText' => {
    body,
  },
  _type == 'list' => {
    title,
    listItems,
  },
  _type == 'marquee' => {
    link[0] ${link()},
    text,
  },
  _type == 'spacer' => {
    size,
  },
  _type == 'projectCarousels' => {
    projects[]-> {
      title,
      modules[] {
        _type,
        ...(${media}),
        _type == 'richText' => {
          content[] {
            ...,
            markDefs[]{
              _key,
              ...(link[0] ${link()}),
            },
          },
        },
      },
      'backgroundColor': backgroundColor.hex
    },
  },
}`

export const page = groq`{
  title,
  'slug': slug.current,
  description,
  openGraphImage ${image},
  modules[] ${modules},
  'themeColor': themeColor.hex,
  'footerColor': footerColor.hex,
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
  noindex,
  'logo': logo.asset->url,
  scramblerSpeed,
}`
