import util from './'

describe('branch', () => {
  const data = [
    [false, () => (console.log('string'), 'string')],
    [true, () => (console.log('RegExp'), /regexp/)],
    [false, () => false],
  ] as const

  it('結果がtrueの条件分岐のreturnになる', () => {
    expect(util(data) instanceof RegExp).toBeTruthy()
  })
})
