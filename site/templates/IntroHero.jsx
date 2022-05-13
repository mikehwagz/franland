import { h } from 'hyposcript'

export default function IntroHero({ data }) {
  return (
    <div class="w-full px-15 m:px-25 pt-40 m:pt-80 pb-122 m:pb-130">
      <h1 class="font-serif text-60 m:text-82 leading-122 tracking-n2">
        {data.introCopy.replace(/{/g, `<span class="relative">`).replace(
          /}/g,
          `<svg
            class="w-full absolute inset-x-0 top-[82%]"
            viewBox="0 0 360 34"
            fill="none"
          >
            <path
              d="M2 24.273C7.22625 17.5557 24.1347 6.66675 49.9585 16.8487C82.2383 29.576 124.647 40.8503 156.943 21.9447C201.212 -3.97009 243.637 0.939453 280.528 12.6062C317.42 24.273 348.316 14.1971 358 2"
              stroke="#2F3336"
              stroke-width="3"
              stroke-linecap="round"
              data-component="underline"
            />
          </svg></span>`,
        )}
      </h1>
    </div>
  )
}
