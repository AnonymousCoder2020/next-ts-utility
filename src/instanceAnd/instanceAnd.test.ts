import util from './'

describe('instanceAnd', () => {
  const a: any = 10
  if (util(a, [HTMLDivElement, HTMLFontElement])) {
    a
  } else if (a instanceof HTMLInputElement || a instanceof HTMLMarqueeElement) {
    a
  }
})
