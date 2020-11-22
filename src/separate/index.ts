export default <I, T extends I>(list: I[], callback: (item: I, i: number) => item is T) => {
  let trueList: T[] = []
  let falseList: Exclude<I, T>[] = []
  let i = 0
  for (const item of list) {
    callback(item, i) ? trueList.push(item) : falseList.push(item as Exclude<I, T>)
    i++
  }
  return [trueList, falseList] as const
}
