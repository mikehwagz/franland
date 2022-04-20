import { h } from 'hyposcript'
import cx from 'classnames'

export default function Video({
  video,
  className = 'relative',
  padding = true,
}) {
  const { poster, mp4 } = video
  return (
    <div
      class={cx('relative overflow-hidden', className)}
      data-component="video"
      style={padding ? { paddingTop: `${(1 / poster.aspect) * 100}%` } : null}
    >
      {poster.alt ? <div class="sr-only">{poster.alt}</div> : null}
      <video
        class="absolute inset-0 w-full h-full object-cover js-video"
        src={mp4}
        preload="auto"
        loop
        muted
        playsinline
        poster={poster.url}
      ></video>
    </div>
  )
}
