import { JSDOM } from 'jsdom'
import { branch, condProps, getOnCorrectness, goErr, instanceAnd, mergePlainObject, move, separate } from './'

describe('goErr', () => {
  const a = () => 'a'
  const b = async () => 'b'
  it('async関数を見分けられるか', async () => {
    expect(goErr(a)).toStrictEqual(['a', undefined])
    expect(await goErr(b)).toStrictEqual(['b', undefined])
  })
})

describe('getOnCorrectness', () => {
  const res = getOnCorrectness(false, {
    true(cond) {
      return 'google' as const
    },
    false() {
      return 'youtube' as const
    },
  })
})

describe('instanceAnd', () => {
  const win = new JSDOM().window
  const a: any = 10
  if (instanceAnd(a, [win.HTMLDivElement, win.HTMLFontElement])) {
    a
  } else if (a instanceof win.HTMLInputElement || a instanceof win.HTMLMarqueeElement) {
    a
  }
})

describe('condProps', () => {
  let obj = {
    ...condProps({
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

describe('branch', () => {
  const data = [
    [false, () => (console.log('string'), 'string')],
    [true, () => (console.log('RegExp'), /regexp/)],
    [false, () => false],
  ] as const

  it('結果がtrueの条件分岐のreturnになる', () => {
    expect(branch(data) instanceof RegExp).toBeTruthy()
  })
})

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
    expect(mergePlainObject(base).c.c0).toBe(0)
  })
  it('1段階マージ', () => {
    expect(mergePlainObject(base, mergeA).c.c0).toBe(2)
  })
  it('2段階マージ', () => {
    const obj = mergePlainObject<TestObj>(base, mergeA, mergeB).c.c1
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

describe('move', () => {
  let a = [0, 1, 2, 3, 4]

  move(a, 1, 3)

  console.log(a) // -> [0, 2, 3, 1, 4]
})

describe('separate', () => {
  const a = [0, 1, 2, 3, 4, 5, 6, 7, '', '']
  const [b, c] = separate(a, (a): a is string => typeof a == 'string')
})
