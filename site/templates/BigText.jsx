import { h } from 'hyposcript'
import BlockContent from './BlockContent'

export default function BigText({ data }) {
  return (
    <div class="font-serif text-35 m:text-62 leading-128 m:leading-122 tracking-n2 indent-[6rem] m:indent-[12rem] px-15 m:px-25 pt-40 m:pt-60 pb-60 m:pb-150">
      <BlockContent blocks={data.body} />
    </div>
  )
}
