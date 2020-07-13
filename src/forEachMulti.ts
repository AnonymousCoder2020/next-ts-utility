type Items<T extends readonly any[][]> = {
  [P in keyof T]?: T[P][Extract<keyof T[P], number>]
}

export default <T extends readonly any[][]>(arrs: T, callback: (values: Items<T>, idx: number) => void | boolean) => {
  const maxLen = Math.max(...arrs.map(arr => arr.length))
  let i = 0
  let loopCondition = true
  while (loopCondition && i < maxLen) {
    const bool = callback(arrs.map(arr => arr[i]) as Items<T>, i)
    if (typeof bool == 'boolean') loopCondition = bool
    i++
  }
}
