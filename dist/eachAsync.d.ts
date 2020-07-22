declare type Callback<I> = (item: I, i: number) => void | false | Promise<void | false>;
declare const _default: <I extends unknown>(arr: I[], callback: Callback<I>) => Promise<void>;
export default _default;
