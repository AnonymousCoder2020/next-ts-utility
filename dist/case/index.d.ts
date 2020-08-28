declare type KeyofNumber<T> = Extract<keyof T, number>;
declare type Casers = readonly (readonly [any, () => any])[];
declare type Cases<I extends Casers> = I[KeyofNumber<I>][0];
declare type CompareMethod<T, I extends Casers> = (item: T, compare: Cases<I>) => boolean;
declare const _default: <T, I extends Casers>(item: T, branches: I, compareMethod?: CompareMethod<T, I> | undefined) => ReturnType<I[Extract<keyof I, number>][1]> | undefined;
export default _default;
