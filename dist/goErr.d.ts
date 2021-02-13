import type { AnyFunction, IsAsyncFunction } from 'my-useful-type';
declare type ReturnTypeWithoutPromise<T extends AnyFunction> = T extends (...args: unknown[]) => Promise<infer R> ? R : T extends (...args: unknown[]) => infer R ? R : never;
declare type WrapPromise<T, S extends true | false> = S extends true ? Promise<T> : T;
declare type GoErrorReturn<R> = [R, undefined] | [undefined, any];
declare const _default: <F extends AnyFunction>(callback: F) => WrapPromise<GoErrorReturn<ReturnTypeWithoutPromise<F>>, IsAsyncFunction<F>>;
export default _default;
