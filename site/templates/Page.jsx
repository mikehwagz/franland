import { h } from 'hyposcript'
import Document from './Document'
import Module from './Module'

export default function Page({ page, site }) {
  return (
    <Document page={page} site={site}>
      {page.modules?.map((data, i) => (
        <Module data={data} site={site} index={i} />
      ))}
    </Document>
  )
}
