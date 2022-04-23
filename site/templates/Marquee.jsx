import { h } from 'hyposcript'
import Link from './Link'

export default function Marquee({ data }) {
  return (
    <div class="pt-100 pb-10">
      <Link
        class="marquee font-serif text-82 leading-122 tracking-n2"
        data-component="marquee"
        style={{ '--speed': 0.8 }}
        data-pause-on-hover
        link={data.link}
      >
        <div class="marquee--inner js-inner">
          <div class="marquee--el js-el">
            <div class="flex items-center">
              {data.text.replaceAll(
                '%s',
                <svg
                  class="w-142 mx-50"
                  viewBox="0 0 142 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M140.955 15.1601C141.665 14.7326 141.894 13.8108 141.466 13.1012L134.5 1.53754C134.072 0.827939 133.15 0.599244 132.441 1.02674C131.731 1.45424 131.502 2.37604 131.93 3.08564L138.122 13.3645L127.843 19.5569C127.134 19.9844 126.905 20.9062 127.333 21.6158C127.76 22.3254 128.682 22.5541 129.392 22.1266L140.955 15.1601ZM88.3448 18.7583L87.3047 17.6775L88.3448 18.7583ZM0.468613 29.4991C0.108322 30.245 0.420975 31.1418 1.16695 31.5021C1.91292 31.8624 2.80972 31.5498 3.17003 30.8038L0.468613 29.4991ZM140.542 12.4194C129.788 9.75124 120.164 7.51593 111.434 7.71203C102.603 7.9104 94.6668 10.593 87.3047 17.6775L89.3849 19.8392C96.1488 13.3304 103.341 10.8946 111.502 10.7113C119.763 10.5257 128.995 12.6455 139.82 15.3311L140.542 12.4194ZM87.3047 17.6775C77.8751 26.7514 69.1329 29.5968 60.8728 29.276C52.5116 28.9513 44.4512 25.3818 36.3967 21.1946L35.0129 23.8564C43.0944 28.0577 51.6724 31.921 60.7564 32.2738C69.9415 32.6305 79.4513 29.3981 89.3849 19.8392L87.3047 17.6775ZM36.3967 21.1946C19.5533 12.4384 5.09284 19.9249 0.468613 29.4991L3.17003 30.8038C7.01718 22.8385 19.5845 15.8357 35.0129 23.8564L36.3967 21.1946Z"
                    class="fill-current"
                  />
                </svg>,
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
