import util from './'

describe('mergePlainObject', () => {
  const base: TestObj = {
    a: 'string',
    b: /regexp/,
    c: {
      c0: 0,
      c1: 1,
    },
  }
  const mergeA = {
    c: {
      c0: 2,
    },
  }
  const mergeB = {
    c: {
      c0: undefined,
      c1: {
        c10: 'c10',
      },
    },
  }
  it('引数が1つの場合、そのままのオブジェクトが返される', () => {
    expect(util(base).c.c0).toBe(0)
  })
  it('1段階マージ', () => {
    expect(util(base, mergeA).c.c0).toBe(2)
  })
  it('2段階マージ', () => {
    const obj = util<TestObj>(base, mergeA, mergeB).c.c1
    if (typeof obj === 'object') expect(obj.c10).toBe('c10')
  })
})

type TestObj = {
  a: string
  b: RegExp
  c: {
    c0: number
    c1:
      | number
      | {
          c10: string
        }
  }
}
