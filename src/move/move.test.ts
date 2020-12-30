import util from './'

describe('move', () => {
  let a = [0, 1, 2, 3, 4]

  util(a, 1, 3)

  console.log(a) // -> [0, 2, 3, 1, 4]
})
