import { /*getOnCorrectness,*/ withFlag } from '../src'

test('main test', () => {
  /*
  const res = getOnCorrectness(true, {
    true: () => 1,
    false: () => 0,
  })
  console.log(res)*/

  console.log(withFlag(/google/g, 'iug').flags)
})
