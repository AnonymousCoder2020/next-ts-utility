import { mergePlainObject } from '../src'

test('main test', () => {
  const a = {
    capture: {
      element: null,
      mode: false,
    },
  }
  const b = { capture: { mode: true } }

  console.log(mergePlainObject(b, a))
})
