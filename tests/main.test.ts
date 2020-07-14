import { forEarchMulti } from '../src'

test('main test', () => {
  const c = [0, 1, 2]
  const d = [/regexp/, 'str', false]

  forEarchMulti([c, d] as const, ([cValue, dValue], i) => {
    console.log(cValue, dValue, i)
  })
})
