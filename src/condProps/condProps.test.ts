import util from './'

describe('condProps', () => {
  let obj = {
    ...util({
      a: [false, 0],
      b: [true, 1],
    }),
    c: 2,
  }
  it('プロパティの有無がboolean値に対応している', () => {
    expect(obj.hasOwnProperty('a')).toBeFalsy()
    expect(obj.hasOwnProperty('b')).toBeTruthy()
  })
})
