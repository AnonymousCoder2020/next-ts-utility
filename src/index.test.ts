import { JSDOM } from 'jsdom'
import { describe, test } from '@jest/globals'
import {
  branch,
  condProps,
  conversion,
  ternaryExt,
  goErr,
  idxRange,
  instanceAnd,
  lastIdxRange,
  mergePlainObj,
  move,
  separate
} from '../dist/index'

describe('conversion', () => {
  console.log(conversion(400000, [60, 60, 24, 365]))
})

describe('goErr', () => {
  const a = goErr(() => 'a')
  const b = goErr(async () => 'b')
  it('async関数を見分けられるか', async () => {
    expect(a).toStrictEqual(['a', undefined])
    expect(await b).toStrictEqual(['b', undefined])
  })
})

describe('idxRange', () => {
  test('文字列', () => {
    expect(idxRange('adieus', 'die')).toEqual([1, 4])
    expect(idxRange('_-_-', 'a')).toEqual(void 0)
  })
  test('正規表現', () => {
    expect(idxRange('minecraft', /.{2}cra/)).toEqual([2, 7])
    expect(idxRange('minecraft', /\d{2}/)).toEqual(void 0)
  })
})

describe('lastIdxRange', () => {
  test('正規表現', () => {
    expect(lastIdxRange('GitHub', /[A-Z][a-z]+/)).toEqual([3, 6])
  })
})

describe('ternaryExt', () => {
  const res = ternaryExt(false, {
    true(cond) {
      return 'google' as const
    },
    false() {
      return 'youtube' as const
    }
  })
})

describe('instanceAnd', () => {
  const win = new JSDOM().window
  const a: any = 10
  if (instanceAnd(a, [win.HTMLFontElement, win.HTMLElement])) {
    a
  } else if (a instanceof win.HTMLDivElement && a instanceof win.HTMLTextAreaElement) {
    a.value
  }
})

describe('condProps', () => {
  let obj = {
    ...condProps({
      a: [false, 0],
      b: [true, 1]
    }),
    c: 2
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
    [false, () => false]
  ] as const

  it('結果がtrueの条件分岐のreturnになる', () => {
    expect(branch(data) instanceof RegExp).toBeTruthy()
  })
})

describe('mergePlainObj', () => {
  const base: TestObj = {
    a: 'string',
    b: /regexp/,
    c: {
      c0: 0,
      c1: 1
    }
  }
  const mergeA = {
    c: {
      c0: 2
    }
  }
  const mergeB = {
    c: {
      c0: undefined,
      c1: {
        c10: 'c10'
      }
    }
  }
  it('引数が1つの場合、そのままのオブジェクトが返される', () => {
    expect(mergePlainObj(base).c.c0).toBe(0)
  })
  it('1段階マージ', () => {
    expect(mergePlainObj(base, mergeA).c.c0).toBe(2)
  })
  it('2段階マージ', () => {
    const obj = mergePlainObj<TestObj>(base, mergeA, mergeB).c.c1
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
