/** @jsx h */

import h from '@gigmade/slate-hyperscript'

export const input = <block type="paragraph">word</block>

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
