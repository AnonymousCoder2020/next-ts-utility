import util from './'

describe('separate', () => {
  const a = [0, 1, 2, 3, 4, 5, 6, 7, '', '']
  const [b, c] = util(a, (a): a is string => typeof a == 'string')
})
