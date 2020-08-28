declare type condPropsObject<T> = {
    [P in keyof T]: [boolean, T[P]];
};
declare const _default: <T>(obj: condPropsObject<T>) => { [P in keyof T]?: T[P] | undefined; };
export default _default;
