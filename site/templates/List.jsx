import { h } from 'hyposcript'

export default function List({ data }) {
  return (
    <div class="px-15 m:px-25 pt-40 pb-100 flex gap-x-20">
      <div class="w-2/12 pt-19">
        <h2 class="text-28">{data.title}:</h2>
      </div>
      <ul class="w-10/12 flex flex-wrap">
        {data.listItems.map(item => (
          <li class="w-1/2 font-serif text-38 leading-150 tracking-n2 [break-inside:avoid-column]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
