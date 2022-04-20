import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Objects
import video from './types/video'
import media from './types/media'

// Modules
import divider from './types/divider'
import spacer from './types/spacer'
import introHero from './types/introHero'
import scrambler from './types/scrambler'
import bigText from './types/bigText'
import list from './types/list'
import marquee from './types/marquee'
import projectCarousels from './types/projectCarousels'
import modules from './types/modules'

// Documents
import site from './types/site'
import page from './types/page'
import project from './types/project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Objects
    video,
    media,

    // Modules
    divider,
    spacer,
    introHero,
    scrambler,
    bigText,
    list,
    marquee,
    projectCarousels,
    modules,

    // Documents
    site,
    page,
    project,
  ]),
})
