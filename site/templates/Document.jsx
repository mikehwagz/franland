import { h } from 'hyposcript'
import manifest from '../manifest.json'
import Header from './Header'
import Footer from './Footer'

export default function Document({ site, themeColor, footerColor, children }) {
  return `<!DOCTYPE html>${(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="preload"
          href="/fonts/GeneralSans-Medium.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="/fonts/Besley-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />

        <link rel="preload" href={`/${manifest['main.css']}`} as="style" />
        <link rel="preload" href={`/${manifest['main.js']}`} as="script" />

        <title>franland</title>

        <link rel="stylesheet" href={`/${manifest['main.css']}`} />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/gsap.min.js"
          defer
        ></script>
        <script src="/ScrambleTextPlugin.min.js" defer></script>
        <script src={`/${manifest['main.js']}`} defer></script>
      </head>
      <body>
        <main a-root>
          <div
            a-page
            style={{
              '--theme-color': themeColor,
              '--footer-color': footerColor,
            }}
          >
            <Header links={site.menuLinks} />
            <main class="bg-theme">{children}</main>
            <Footer links={site.footerLinks} copyright={site.copyrightText} />
          </div>
        </main>
      </body>
    </html>
  )}`
}
