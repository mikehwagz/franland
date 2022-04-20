import { h } from 'hyposcript'

export default function Link({ className, link, children, ...rest }) {
  return (
    <a
      href={
        link._type === 'externalLink'
          ? link.url
          : link._type === 'pageLink'
          ? `/${link.slug}`
          : link._type === 'projectLink'
          ? `/work/${link.slug}`
          : `/work-with-us`
      }
      className={className}
      target={link.openInNewTab ? '_blank' : null}
      rel={link.openInNewTab ? 'noopener noreferrer' : null}
      {...rest}
    >
      {children}
    </a>
  )
}
