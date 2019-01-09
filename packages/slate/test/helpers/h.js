import { createHyperscript } from '@gigmade/slate-hyperscript'

const h = createHyperscript({
  blocks: {
    line: 'line',
    paragraph: 'paragraph',
    quote: 'quote',
    code: 'code',
    list: 'list',
    item: 'item',
    image: 'image',
    div: 'div',
  },
  inlines: {
    link: 'link',
    hashtag: 'hashtag',
    comment: 'comment',
    emoji: 'emoji',
  },
  marks: {
    b: 'bold',
    i: 'italic',
    u: 'underline',
    fontSize: 'font-size',
  },
  decorations: {
    result: 'result',
    highlight: 'highlight',
  },
  schema: {
    blocks: {
      image: {
        isVoid: true,
      },
    },
    inlines: {
      emoji: {
        isVoid: true,
      },
    },
    marks: {
      result: {
        isAtomic: true,
      },
    },
  },
})

export default h
