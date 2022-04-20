import { h } from 'hyposcript'
import Img from './Img'
import Video from './Video'

export default function Media({ media, ...rest }) {
  if (media._type === 'image') {
    return <Img image={media} {...rest} />
  }

  if (media._type === 'video') {
    return <Video video={media} {...rest} />
  }
}
