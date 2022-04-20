export default function resolveProductionUrl(document) {
  return `${
    // window.location.hostname === 'localhost'
    //   ?
    'http://localhost:4000'
    // : 'https://groove.netlify.app'
  }/preview/${document._type}/${document.slug.current}`
}
