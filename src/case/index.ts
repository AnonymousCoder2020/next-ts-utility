type KeyofNumber<T> = Extract<keyof T, number>

type Casers = readonly (readonly [any, () => any])[]

type Cases<I extends Casers> = I[KeyofNumber<I>][0]

type CompareMethod<T, I extends Casers> = (item: T, compare: Cases<I>) => boolean

type ReturnCase<I extends Casers> = ReturnType<I[KeyofNumber<I>][1]>

export default <T, I extends Casers>(item: T, branches: I, compareMethod?: CompareMethod<T, I>) => {
  for (const [compare, fn] of branches) {
    const isMatch = compareMethod ? compareMethod(item, compare) : item === compare
    if (isMatch) return fn() as ReturnCase<I>
  }
}
