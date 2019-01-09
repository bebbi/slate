/** @jsx h */

import { Editor } from '@gigmade/slate'

export const input = new Editor().registerCommand('customCommand')

export default function(editor) {
  return editor.hasCommand('customCommand')
}

export const output = true
