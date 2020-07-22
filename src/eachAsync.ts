type Callback<I> = (item: I, i: number) => void | false | Promise<void | false>

export default async <I extends any>(arr: I[], callback: Callback<I>) => {
  let i = 0
  while (i < arr.length) {
    const res = await callback(arr[i], i)
    if (res === false) return
    i++
  }
}
