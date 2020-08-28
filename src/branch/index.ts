type KeyofNumber<T> = Extract<keyof T, number>

type InlineBranch = readonly [boolean, () => any]

type ReturnTypeBranch<I extends readonly InlineBranch[]> = {
  [P in KeyofNumber<I>]?: ReturnType<I[P][1]>
}

export default <I extends readonly InlineBranch[]>(branches: I): ReturnTypeBranch<I>[KeyofNumber<I>] => {
  for (const [bool, fn] of branches) {
    if (bool) return fn()
  }
}
