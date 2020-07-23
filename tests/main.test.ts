import { getOnCorrectness } from '../src'

test('main test', () => {
  const n = getOnCorrectness(true, {
    true: () => 1 as const,
    false: () => 0 as const,
  })
})
