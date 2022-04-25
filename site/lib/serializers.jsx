import blocksToHtml from '@sanity/block-content-to-html'
import Link from '../templates/Link'

const h = blocksToHtml.h

export const externalLinks = {
  marks: {
    link: props => {
      return (
        <a href={props.mark.href} target="_blank" rel="noopener noreferrer">
          {props.children}
        </a>
      )
    },
  },
}

export const projectContent = {
  types: {
    block: props => {
      if (props.node.style === 'h2') {
        return (
          <h3 class="font-semibold text-25 m:text-48 leading-128 mb-15 m:mb-30">
            {props.children}
          </h3>
        )
      }

      return (
        <p class="font-serif text-16 m:text-32 leading-132 my-15">
          {props.children}
        </p>
      )
    },
  },
  marks: {
    externalLink: props => {
      return (
        <Link link={props.mark} className="underline hover:no-underline" h={h}>
          {props.children}
        </Link>
      )
    },
    internalLink: props => {
      return (
        <Link link={props.mark} className="underline hover:no-underline" h={h}>
          {props.children}
        </Link>
      )
    },
  },
}
