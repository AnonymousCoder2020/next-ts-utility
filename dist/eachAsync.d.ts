declare type Callback<I> = (item: I, i: number) => void | boolean | Promise<void | boolean>;
declare const _default: <I extends unknown>(arr: I[], callback: Callback<I>) => Promise<void>;
export default _default;
