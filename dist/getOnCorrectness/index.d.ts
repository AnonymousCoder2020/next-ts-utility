interface Branch {
    true: () => any;
    false: () => any;
}
declare const _default: <B extends boolean, T extends Branch>(bool: B, branch: T) => B extends true ? ReturnType<T["true"]> : ReturnType<T["false"]>;
export default _default;
