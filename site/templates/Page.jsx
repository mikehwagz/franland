import { h } from 'hyposcript'
import Document from './Document'
import Layout from './Layout'

export default function Page() {
  return (
    <Document>
      <Layout>
        <div class="w-full px-15 m:px-25 pt-170 pb-130">
          <h1 class="font-serif text-60 m:text-82 leading-122 tracking-n2">
            Hi there!{' '}
            <span class="relative">
              I'm Fran.
              <svg
                class="w-full absolute inset-x-0 top-full"
                viewBox="0 0 360 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 24.273C7.22625 17.5557 24.1347 6.66675 49.9585 16.8487C82.2383 29.576 124.647 40.8503 156.943 21.9447C201.212 -3.97009 243.637 0.939453 280.528 12.6062C317.42 24.273 348.316 14.1971 358 2"
                  stroke="#2F3336"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </h1>
        </div>
        <div
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
        </div>
      </Layout>
    </Document>
  )
}
