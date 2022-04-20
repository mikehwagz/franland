import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import Emoji from 'a11y-react-emoji'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site')
        .icon(() => <Emoji style={{ fontSize: 30 }} symbol="🌎" />)
        .child(S.editor().title('Site').schemaType('site').documentId('site')),
      S.listItem()
        .title('Pages')
        .icon(() => <Emoji style={{ fontSize: 30 }} symbol="📝" />)
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Projects')
        .icon(() => <Emoji style={{ fontSize: 30 }} symbol="🎨" />)
        .child(S.documentTypeList('project').title('Projects')),
    ])
