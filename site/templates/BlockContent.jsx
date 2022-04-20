import { h } from 'hyposcript'
import blocksToHtml from '@sanity/block-content-to-html'
import { externalLinks } from '../lib/serializers'

export default function BlockContent({ blocks, serializers = externalLinks }) {
  return blocksToHtml({ blocks, serializers })
}
