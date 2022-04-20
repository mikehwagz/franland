import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Objects
import externalLink from './types/externalLink'
import pageLink from './types/pageLink'

import link from './types/link'
import video from './types/video'
import media from './types/media'

// Modules
import spacer from './types/spacer'
import modules from './types/modules'

// Documents
import site from './types/site'
import page from './types/page'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Objects
    externalLink,
    pageLink,
    link,
    video,
    media,

    // Modules
    spacer,
    modules,

    // Documents
    site,
    page,
  ]),
})
