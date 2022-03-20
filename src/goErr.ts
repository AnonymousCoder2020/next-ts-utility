import type { AnyFunction, IsAsyncFunction } from 'my-useful-type'

type ReturnTypeWithoutPromise<T extends AnyFunction> = T extends (...args: unknown[]) => Promise<infer R>
  ? R
  : T extends (...args: unknown[]) => infer R
  ? R
  : never
type WrapPromise<T, S extends true | false> = S extends true ? Promise<T> : T
type GoErrorReturn<R> = [R, undefined] | [undefined, any]
type GoErrorReturnType<F extends AnyFunction> = WrapPromise<GoErrorReturn<ReturnTypeWithoutPromise<F>>, IsAsyncFunction<F>>

export default <F extends AnyFunction>(callback: F) => {
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
          (res as Promise<ReturnTypeWithoutPromise<F>>).then(finallyRes => resolve([finallyRes, err])).catch(error => resolve([undefined, error]))
        )
      : ([res, err] as [ReturnType<F>, any])
  ) as GoErrorReturnType<F>
}
