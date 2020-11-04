interface Branch<T, F, C> {
    true: (cond: C) => T;
    false: (cond: C) => F;
}
declare const _default: <T, F, C>(cond: C, branch: Branch<T, F, C>) => C extends false | void | null | undefined ? F : T;
export default _default;
