import type { AnyFunc, IsAsyncFunc } from 'next-type-utility';
type ResTypeExtractPromise<T extends AnyFunc> = T extends (...args: unknown[]) => Promise<infer R> ? R : T extends (...args: unknown[]) => infer R ? R : never;
type SwitchPromise<T, S extends boolean> = S extends true ? Promise<T> : T;
type GoErrRes<R> = [R, undefined] | [undefined, any];
declare const _default: <R extends unknown>(callback: () => R) => SwitchPromise<GoErrRes<ResTypeExtractPromise<() => R>>, IsAsyncFunc<() => R>>;
export default _default;
