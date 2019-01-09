/** @jsx h */

import h from '@gigmade/slate-hyperscript'

export const input = <inline type="link">word</inline>

export const output = {
  object: 'inline',
  type: 'link',
  data: {},
  nodes: [
    {
      object: 'text',
      text: 'word',
      marks: [],
    },
  ],
}
