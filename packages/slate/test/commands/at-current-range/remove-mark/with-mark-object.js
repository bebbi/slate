/** @jsx h */

import h from '../../../helpers/h'
import { Mark } from '@gigmade/slate'

export default function(editor) {
  editor.removeMark(
    Mark.create({
      type: 'bold',
      data: { thing: 'value' },
    })
  )
}

export const input = (
  <value>
    <document>
      <paragraph>
        <anchor />
        <b thing="value">w</b>
        <focus />ord
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        <anchor />w<focus />ord
      </paragraph>
    </document>
  </value>
)
