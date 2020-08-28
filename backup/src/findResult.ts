export default <T, D>(iterator: Iterable<T>, callback: (item: T, index: number) => D) => {
  let i = 0
  for (const item of iterator) {
    const res = callback(item, i)
    if (res) return res
  }
}
