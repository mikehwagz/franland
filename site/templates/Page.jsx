import { h } from 'hyposcript'
import Document from './Document'
import Module from './Module'

export default function Page({ page, site }) {
  return (
    <Document
      site={site}
      themeColor={page.themeColor ?? '#FAEEE6'}
      footerColor={page.footerColor ?? page.themeColor ?? '#FAEEE6'}
    >
      {page.modules?.map((data, i) => (
        <Module data={data} index={i} />
      ))}
    </Document>
  )
}
