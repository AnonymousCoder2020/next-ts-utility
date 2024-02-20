import type { AnyFunc, IsAsyncFunc, OrPromise } from 'next-type-utility'

type ResTypeExtractPromise<T extends AnyFunc> = T extends (...args: unknown[]) => Promise<infer R>
  ? R
  : T extends (...args: unknown[]) => infer R
  ? R
  : never
type SwitchPromise<T, S extends boolean> = S extends true ? Promise<T> : T
type GoErrRes<R> = [R, undefined] | [undefined, any]
type GoErrResType<F extends AnyFunc> = SwitchPromise<GoErrRes<ResTypeExtractPromise<F>>, IsAsyncFunc<F>>

export default <R extends OrPromise<any>>(callback: () => R) => {
  let err: any, res: unknown
  try {
    res = callback()
  } catch (error) {
    console.warn(error)
    err = error
  }
  return (
    res && res instanceof Promise
      ? new Promise(resolve =>
          (res as Promise<ResTypeExtractPromise<() => R>>)
            .then(finallyRes => resolve([finallyRes, err]))
            .catch(error => resolve([undefined, error]))
        )
      : ([res, err] as [R, any])
  ) as GoErrResType<() => R>
}
