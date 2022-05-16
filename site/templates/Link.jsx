import { h as hyposcript } from 'hyposcript'

export default function Link({
  className,
  link,
  children,
  h = hyposcript,
  ...rest
}) {
  return (
    <a
      href={
        link.isHomepage
          ? '/'
          : link._type === 'externalLink'
          ? link.url
          : link._type === 'pageLink'
          ? `/${link.slug}`
          : ``
      }
      className={className}
      target={link.openInNewTab ? '_blank' : null}
      rel={link.openInNewTab ? 'noopener noreferrer' : null}
      a-ignore={link._type === 'externalLink' ? '' : null}
      {...rest}
    >
      {children}
    </a>
  )
}
