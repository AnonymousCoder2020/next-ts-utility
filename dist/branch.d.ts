type KeyofNumber<T> = Extract<keyof T, number>;
type Branches = readonly (readonly [boolean, () => any])[];
type ReturnTypeBranch<I extends Branches> = {
    [P in KeyofNumber<I>]?: ReturnType<I[P][1]>;
};
declare const _default: <I extends Branches>(branches: I) => ReturnTypeBranch<I>[Extract<keyof I, number>];
export default _default;
