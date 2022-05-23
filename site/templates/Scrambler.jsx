import { h } from 'hyposcript'
import escape from 'lodash.escape'
import Img from './Img'

export default function Scrambler({ data, site }) {
  const { content, images, backgroundColor } = data

  return (
    <div
      class="relative px-15 m:px-25 pt-40 m:pt-80 pb-20 m:pb-90 font-serif text-35 m:text-62 tracking-n2"
      data-component="scrambler"
      data-speed={site.scramblerSpeed ?? 5}
      style={{ backgroundColor }}
    >
      <div class="absolute invisible js-refText" aria-hidden="true">
        X
      </div>
      <div class="mb-60 m:mb-0 js-textWrap">
        <div class="js-text">
          {content.map(({ _type, text }) => {
            if (_type === 'staticText') {
              return <>{text} </>
            }

            if (_type === 'dynamicText') {
              return (
                <>
                  <span
                    class="font-sans tracking-normal"
                    data-dynamic-text={escape(JSON.stringify(text))}
                  >
                    {text[0]}
                  </span>{' '}
                </>
              )
            }
          })}
        </div>
      </div>
      {images?.length ? (
        <div
          class="relative aspect-[3/4] w-[60%] m:w-[30rem] ml-auto m:ml-0 m:absolute m:-top-15 m:right-100 will-change-transform js-imgWrap"
          style={{ visibility: 'hidden' }}
        >
          {images.map((image, i) =>
            image._type === 'image' ? (
              <div
                class="absolute inset-0"
                style={{ visibility: 'hidden' }}
                data-index={i}
              >
                <Img image={image} className="aspect-[3/4]" padding={false} />
              </div>
            ) : null,
          )}
        </div>
      ) : null}
    </div>
  )
}
