import groq from 'groq'

export const link = groq`{
  _type,
  openInNewTab,
  defined(title) => {
    title,
  },
  _type == 'pageLink' => {
    'slug': page->slug.current,
    'themeColor': page->themeColor.hex,
    !defined(title) => {
      'title': page->title,
    },
  },
  _type == 'projectLink' => {
    'slug': project->slug.current,
    !defined(title) => {
      'title': project->title,
    },
  },
  _type == 'externalLink' => {
    url,
  },
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

export const accordion = groq`{
  'items': accordionItems[] {
    header,
    content,
  },
}`

export const timeline = groq`{
  phases[] {
    title,
    milestones,
    outcome,
    time,
  },
}`

export const modules = groq`{
  _type,
  _type == 'bigButton' => {
    link[0] ${link},
  },
  _type == 'bigLists' => {
    lists[] {
      title,
      items,
    },
  },
  _type == 'bigMedia' => {
    media[0] ${media},
    size,
    showBrowserChrome,
  },
  _type == 'bigText' => {
    overline,
    body,
    increaseLeading,
    button[0] ${link},
  },
  _type == 'colophon' => {
    lists[] {
      overline,
      content,
    },
  },
  _type == 'featuredWork' => {
    overline,
    projects[_ref != ^.^.^._id]-> {
      title,
      description,
      'slug': slug.current,
      featuredMedia[] ${media},
    },
  },
  _type == 'imageSequence' => {
    images[] ${image},
  },
  _type == 'news' => {
    overline,
    newsClippings[]-> {
      content,
    },
  },
  _type == 'processAccordions' => {
    overline,
    design ${accordion},
    development ${accordion},
    combo ${accordion},
  },
  _type == 'projectList' => {
    title,
    projects[]-> {
      year,
      services,
      title,
      url,
      'slug': slug.current,
      'hasCaseStudy': length(modules) > 0,
    },
  },
  _type == 'sampleTimelines' => {
    overline,
    design ${timeline},
    development ${timeline},
    combo ${timeline},
  },
  _type == 'shapes' => {
    image ${image},
    mobileImage ${image},
  },
  _type == 'spacer' => {
    size,
  },
  _type == 'squiggle' => {
    image ${image},
  },
  _type == 'threeUpMedia' => {
    media[] ${media},
    verticalAlignment,
  },
  _type == 'twoUpMedia' => {
    media[] ${media},
    verticalAlignment,
  },
  _type == 'website' => {
    media[] ${media},
  },
}`

export const site = groq`'site': *[_type == 'site'] | order(_updatedAt desc)[0] {
  url,
  title,
  description,
  openGraphImage ${image},
  ctas[] ${link},
  menuLinks[] ${link},
  footerLinks[] ${link},
  footerMarquee,
}`

export const page = groq`{
  title,
  'slug': slug.current,
  description,
  openGraphImage ${image},
  'themeColor': themeColor.hex,
  modules[] {
    !defined(_ref) => ${modules},
    defined(_ref) => {
      ...@->module[0] ${modules},
    },
  },
}`

export const project = groq`{
  title,
  'slug': slug.current,
  description,
  openGraphImage ${image},
  modules[] {
    !defined(_ref) => ${modules},
    defined(_ref) => {
      ...@->module[0] ${modules},
    },
  },
}`
