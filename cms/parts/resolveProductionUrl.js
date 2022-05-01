export default function resolveProductionUrl(document) {
  return `${
    window.location.hostname === 'localhost'
      ? 'http://localhost:4000'
      : 'https://franland.netlify.app'
  }/preview/${document.slug.current}`
}
