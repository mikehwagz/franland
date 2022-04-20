import { h } from 'hyposcript'
import Document from './Document'
import Module from './Module'

export default function Page({ page, site }) {
  return (
    <Document site={site}>
      {page.modules?.map((data, i) => (
        <Module data={data} index={i} />
      ))}
      {/* <div
        class="bg-[#FFCCFD] px-15 m:px-25 pt-40 m:pt-80 pb-100 m:pb-90 font-serif text-35 m:text-62 tracking-n2"
        data-component="scramble"
      >
        I’ve lived in{' '}
        <span class="font-sans tracking-normal" data-to="Dallas, Texas">
          Montpellier, France,
        </span>
        <br />
        where I{' '}
        <span class="font-sans tracking-normal" data-to="worked at Rebees">
          went to elementary school.
        </span>
      </div>
      <div
        class="bg-[#CEE4F5] px-15 m:px-25 pt-40 m:pt-80 pb-100 m:pb-90 font-serif text-35 m:text-62 tracking-n2"
        data-component="scramble"
      >
        I like{' '}
        <span class="font-sans tracking-normal" data-to="going for walks">
          designing and building bus shelters,
        </span>
        <br />
        especially{' '}
        <span class="font-sans tracking-normal" data-to="with my dog, Chunk">
          at Yestermorrow School.
        </span>
      </div>
      <div
        class="bg-[#FFEC96] px-15 m:px-25 pt-40 m:pt-80 pb-100 m:pb-90 font-serif text-35 m:text-62 tracking-n2"
        data-component="scramble"
      >
        If you'd like to{' '}
        <span class="font-sans tracking-normal" data-to="recommend a book">
          create a place with me,
        </span>
        <br />
        please reach out at <a href="mailto:ahoy@fran.land">ahoy@fran.land</a>
      </div> */}
    </Document>
  )
}
