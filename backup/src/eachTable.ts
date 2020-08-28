type ArrayList = readonly (readonly any[])[]

type Item<L extends ArrayList> = L[number][number]

type Callback<L extends ArrayList> = (i: Item<L>, index: { row: number; column: number }) => void | boolean

export default <L extends ArrayList>(rows: L, callback: Callback<L>) => {
  let rowIdx = 0
  for (const row of rows) {
    let columnIdx = 0
    for (const item of row) {
      if (callback(item, { row: rowIdx, column: columnIdx }) === false) return
      columnIdx++
    }
    rowIdx++
  }
}
