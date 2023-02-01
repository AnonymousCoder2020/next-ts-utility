import type { AnyFunc, IsAsyncFunc } from 'next-type-utility';
type ReturnTypeWithoutPromise<T extends AnyFunc> = T extends (...args: unknown[]) => Promise<infer R> ? R : T extends (...args: unknown[]) => infer R ? R : never;
type WrapPromise<T, S extends true | false> = S extends true ? Promise<T> : T;
type GoErrorReturn<R> = [R, undefined] | [undefined, any];
declare const _default: <F extends AnyFunc>(callback: F) => WrapPromise<GoErrorReturn<ReturnTypeWithoutPromise<F>>, IsAsyncFunc<F>>;
export default _default;
