type KeyofNumber<T> = Extract<keyof T, number>

type Branches = readonly (readonly [boolean, () => any])[]

type ReturnTypeBranch<I extends Branches> = {
  [P in KeyofNumber<I>]?: ReturnType<I[P][1]>
}

export default <I extends Branches>(branches: I): ReturnTypeBranch<I>[KeyofNumber<I>] => {
  for (const [bool, fn] of branches) {
    if (bool) return fn()
  }
}
