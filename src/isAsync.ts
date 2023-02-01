import type { AnyFunc, IsAsyncFunc } from 'next-type-utility'
export default <F extends AnyFunc>(func: F) =>
  ['AsyncFunction', 'AsyncGeneratorFunction'].some(asyncName => func.constructor.name === asyncName) as IsAsyncFunc<F>
