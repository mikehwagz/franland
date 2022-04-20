import { h } from 'hyposcript'
import cx from 'classnames'
import { imageBuilder } from '../lib/sanity'

export default function Img({
  image,
  className,
  padding = true,
  placeholder = true,
}) {
  let imgCx = 'absolute inset-0 w-full h-full object-cover'

  return (
    <div
      class={cx('relative overflow-hidden', className)}
      style={padding ? { paddingTop: `${(1 / image.aspect) * 100}%` } : null}
      data-component="img"
    >
      {placeholder ? (
        <img class={cx(imgCx, 'js-lqip')} src={lqip(image)} alt="" />
      ) : null}
      <img
        class={cx(imgCx, 'transition-opacity opacity-0 js-img')}
        data-srcset={srcset(image)}
        alt={image.alt ?? ''}
      />
    </div>
  )
}

function srcset(image) {
  return [400, 650, 768, 1024, 1280, 1536]
    .map(
      width =>
        `${imageBuilder
          .image(image)
          .dpr(2)
          .width(width)
          .auto('format')
          .fit('max')
          .url()} ${width}w`,
    )
    .join(',')
}

function lqip(image) {
  const url = imageBuilder
    .image(image)
    .dpr(1)
    .width(4)
    .blur(10)
    .auto('format')
    .fit('max')
    .url()

  return url
}
