declare const _default: <P extends string | number, T extends { [K in P]?: any; }>(obj: T, props: P[]) => obj is T & { [K_1 in P]: Exclude<T[K_1], undefined>; };
export default _default;
