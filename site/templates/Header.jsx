import { h } from 'hyposcript'
import Logo from './Logo'
import Link from './Link'

export default function Header({ logo, links }) {
  return (
    <header
      class="fixed top-0 inset-x-0 z-9 [--clip-y:100%] m:[--clip-y:0%] [--nav-visibility:hidden]"
      data-component="header"
    >
      <div
        class="m:hidden absolute top-0 inset-x-0 h-screen bg-[rgba(47,51,54,0.6)] js-backdrop"
        style={{ opacity: 0, visibility: 'hidden' }}
      ></div>
      <div class="relative flex justify-between w-full h-75 m:h-90 bg-theme border-b-2 px-15 m:px-25">
        <a href="/" class="h-full block pt-20 m:pt-25 pb-22 m:pb-27">
          <img class="h-full w-auto" src={logo} loading="lazy" />
        </a>
        <button class="m:hidden h-full px-15 absolute top-0 right-0 js-btn">
          <svg class="w-28 js-btnIcon" viewBox="0 0 28 27" fill="none">
            <path
              d="M16.632 27V15.8276H28V11.0629H16.632V0H11.368V11.0629H0V15.8276H11.368V27H16.632Z"
              class="fill-current"
            />
          </svg>
        </button>
        <div class="header-nav-outer absolute m:static inset-x-0 top-75 bg-charcoal m:bg-transparent">
          <nav class="header-nav-inner h-[var(--nav-height)] m:h-full m:flex items-center gap-x-50 leading-100">
            {links.map(link => (
              <Link
                className="w-full m:w-auto px-15 m:px-0 pt-20 m:pt-0 pb-20 last:pb-22 m:!pb-0 m:h-full flex items-center border-b-2 last:border-b-0 m:!border-b-0 m:!bg-transparent group focus-visible:underline focus:outline-none js-links"
                style={{
                  backgroundColor: link.mobileMenuLinkColor ?? '#FAEEE6',
                }}
                link={link}
              >
                <div class="w-16 h-16 rounded-full border-2 mr-10 group-hover:bg-charcoal"></div>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
