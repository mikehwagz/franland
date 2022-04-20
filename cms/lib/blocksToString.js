const blocksToString = (blocks = [], separator = '\n\n') =>
  blocks
    .map(block =>
      block._type !== 'block' || !block.children
        ? ''
        : block.children.map(child => child.text).join(''),
    )
    .join(separator)

export default blocksToString
