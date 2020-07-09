import { synthesizeDOMRect } from '~/.'

test('main', () => {
  const { x, y, width, height } = synthesizeDOMRect(new DOMRect(10, 20, 100, 500), new DOMRect(30, 40, 30, 60))
  console.log({ x, y, width, height })
})
