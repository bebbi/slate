/** @jsx h */

import { createHyperscript } from '@gigmade/slate-hyperscript'

const h = createHyperscript({
  blocks: {
    paragraph: 'paragraph',
  },
  decorations: {
    highlight: 'highlight',
  },
})

export const input = (
  <value>
    <document>
      <block type="paragraph">
        one<highlight>two</highlight>three
      </block>
    </document>
  </value>
)

export const options = {
  preserveDecorations: true,
  preserveKeys: true,
}

export const output = {
  object: 'value',
  document: {
    object: 'document',
    key: '3',
    data: {},
    nodes: [
      {
        object: 'block',
        key: '2',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            key: '1',
            text: 'onetwothree',
            marks: [],
          },
        ],
      },
    ],
  },
  decorations: [
    {
      object: 'decoration',
      anchor: {
        object: 'point',
        key: '1',
        path: [0, 0],
        offset: 3,
      },
      focus: {
        object: 'point',
        key: '1',
        path: [0, 0],
        offset: 6,
      },
      mark: {
        object: 'mark',
        type: 'highlight',
        data: {},
      },
    },
  ],
}
