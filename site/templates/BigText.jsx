import { h } from 'hyposcript'
import BlockContent from './BlockContent'

export default function BigText({ data }) {
  console.log(data)
  return (
    <div class="font-serif text-62 leading-122 tracking-n2 indent-[12rem] px-15 m:px-25 pt-60 pb-150">
      <BlockContent blocks={data.body} />
    </div>
  )
}
