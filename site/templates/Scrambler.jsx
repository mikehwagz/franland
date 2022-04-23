import { h } from 'hyposcript'
import escape from 'lodash.escape'

export default function Scrambler({ data }) {
  const { content, images, backgroundColor } = data
  return (
    <div
      class="px-15 m:px-25 pt-40 m:pt-80 pb-100 m:pb-90 font-serif text-35 m:text-62 tracking-n2"
      data-component="scrambler"
      style={{ backgroundColor }}
    >
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
              <br class="hidden m:inline" />
            </>
          )
        }
      })}
    </div>
  )
}
