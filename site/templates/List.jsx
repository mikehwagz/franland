import { h } from 'hyposcript'
import Link from './Link'

export default function List({ data }) {
  const listItems = data.listItems.map(item => {
    if (
      item.slice(0, 1) === '[' &&
      item.slice(item.length - 1) === ')' &&
      item.split('](').length === 2
    ) {
      const [title, url] = item.slice(1, item.length - 1).split('](')
      return {
        title,
        url,
        _type: 'externalLink',
        openInNewTab: true,
      }
    }

    return item
  })
  return (
    <div class="px-15 m:px-25 pt-40 pb-60 m:pb-100 m:flex items-baseline gap-x-20">
      <div class="m:w-2/12 m:pt-19 mb-20 m:mb-0">
        <h2 class="text-28">{data.title}:</h2>
      </div>
      <ul class="m:w-10/12 flex flex-wrap">
        {listItems.map(item => (
          <li class="w-full m:w-1/2 font-serif text-31 m:text-38 leading-150 tracking-n2">
            {item?.url ? (
              <Link className="hover:opacity-75" link={item}>
                {item.title}
              </Link>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
