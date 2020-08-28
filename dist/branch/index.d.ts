declare type KeyofNumber<T> = Extract<keyof T, number>;
declare type InlineBranch = readonly [boolean, () => any];
declare type ReturnTypeBranch<I extends readonly InlineBranch[]> = {
    [P in KeyofNumber<I>]?: ReturnType<I[P][1]>;
};
declare const _default: <I extends readonly InlineBranch[]>(branches: I) => ReturnTypeBranch<I>[Extract<keyof I, number>];
export default _default;
