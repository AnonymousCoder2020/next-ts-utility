import type { AnyFunc, IsAsyncFunc } from 'next-type-utility';
declare const _default: <F extends AnyFunc>(func: F) => IsAsyncFunc<F>;
export default _default;
