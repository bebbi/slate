/** @jsx h */

import h from '@gigmade/slate-hyperscript'

export const input = (
  <block type="paragraph">
    <text>word</text>
  </block>
)

export const output = {
  object: 'block',
  type: 'paragraph',
  data: {},
  nodes: [
    {
      object: 'text',
      text: 'word',
      marks: [],
    },
  ],
}
