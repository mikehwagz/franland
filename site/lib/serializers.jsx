import blocksToHtml from '@sanity/block-content-to-html'

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
