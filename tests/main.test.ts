import { eachTable } from '../src'

test('main test', () => {
  const table = [
    [0, 1, 2, 3, 4],
    [5, 6, '', , 9],
    [10, 11],
  ]
  eachTable(table, (item, { row, column }) => {
    console.log(item, row, column)
  })
})
