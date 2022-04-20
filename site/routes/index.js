import Page from '../templates/Page'

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  return {
    html: Page(),
  }
}
