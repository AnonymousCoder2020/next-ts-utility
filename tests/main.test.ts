import { getOnCorrectness } from '../src'

test('main test', () => {
  const res = getOnCorrectness(true, {
    true: () => 1,
    false: () => 0,
  })
  console.log(res)
})
