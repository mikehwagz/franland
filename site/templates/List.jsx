import { h } from 'hyposcript'

export default function List({ data }) {
  return (
    <div class="px-15 m:px-25 pt-40 pb-60 m:pb-100 m:flex gap-x-20">
      <div class="m:w-2/12 m:pt-19 mb-20 m:mb-0">
        <h2 class="text-28">{data.title}:</h2>
      </div>
      <ul class="m:w-10/12 flex flex-wrap">
        {data.listItems.map(item => (
          <li class="m:w-1/2 font-serif text-31 m:text-38 leading-150 tracking-n2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
