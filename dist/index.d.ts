export declare const condProp: <B extends boolean, T extends object>(bool: B, obj: T) => B extends true ? T : {};
declare type condPropsObject<T> = {
    [P in keyof T]: [boolean, T[P]];
};
export declare const condProps: <T>(obj: condPropsObject<T>) => { [P in keyof T]?: T[P] | undefined; };
export declare const notUndefinedPropsAnd: <P extends string | number, T extends { [K in P]?: any; }>(obj: T, props: P[]) => obj is T & { [K_1 in P]: Exclude<T[K_1], undefined>; };
export declare const instanceAnd: <A>(value: unknown, instances: (new () => A)[]) => value is A;
export declare const instanceOr: <A>(value: unknown, instances: (new () => A)[]) => value is A;
export {};
