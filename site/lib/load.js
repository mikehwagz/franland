const cache = {}

export default async function load(loader, key) {
  if (cache[key]) return cache[key]
  cache[key] = await loader()
  return cache[key]
}
