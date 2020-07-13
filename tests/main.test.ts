import { forEarchMulti } from '../src'

test('main test', () => {
  const c = [0, 1, 2]
  const d = ['str', /regexp/]

  forEarchMulti([c, d] as const, ([cValue, dValue], i) => {
    console.log(cValue, dValue, i)
  })
})
