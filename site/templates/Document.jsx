import { h } from 'hyposcript'
import manifest from '../manifest.json'
import Header from './Header'
import Footer from './Footer'

export default function Document({ page, site, children }) {
  const metaTitle = page.title ?? site.title
  const metaDescription = page.description ?? site.description
  const openGraphImage = page.openGraphImage ?? site.openGraphImage
  const themeColor = page.themeColor ?? '#FAEEE6'
  const footerColor = page.footerColor ?? page.themeColor ?? '#FAEEE6'

  return `<!DOCTYPE html>${(
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta content="ie=edge" http-equiv="x-ua-compatible" />
        <meta name="google" content="notranslate" />
        <meta http-equiv="Content-Language" content="en" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {site.noindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : null}

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

        <title>
          {page.title} | {site.title}
        </title>
        <meta content={metaDescription} name="description" />

        {/* Open Graph */}
        <meta content="website" property="og:type" />
        <meta content={site.url} property="og:url" />
        <meta content={metaTitle} property="og:site_name" />
        <meta content={metaTitle} property="og:title" />
        <meta content={metaDescription} property="og:description" />
        <meta content={openGraphImage.url} property="og:image" />
        <meta content={openGraphImage.alt} property="og:image:alt" />
        <meta content={openGraphImage.width} property="og:image:width" />
        <meta content={openGraphImage.height} property="og:image:height" />

        {/* Twitter Card */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={site.url} name="twitter:url" />
        <meta content={metaTitle} name="twitter:title" />
        <meta content={metaDescription} name="twitter:description" />
        <meta content={openGraphImage.src} name="twitter:image" />
        <meta content={openGraphImage.alt} name="twitter:image:alt" />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff"></meta>

        <link rel="stylesheet" href={`/${manifest['main.css']}`} />
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
            <Header logo={site.logo} links={site.menuLinks} />
            <main class="bg-theme">{children}</main>
            <Footer links={site.footerLinks} copyright={site.copyrightText} />
          </div>
        </main>
      </body>
    </html>
  )}`
}
