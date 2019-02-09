import { Point } from '@gigmade/slate'

export const input = {
  point: Point.create({
    key: 'a',
    path: [0, 0],
    offset: 0,
  }),
  target: Point.create({
    key: 'b',
    path: [0, 0, 1],
    offset: 0,
  }),
}

export default function({ point, target }) {
  return point.isAfterPoint(target)
}

export const output = false
