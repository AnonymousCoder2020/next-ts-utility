declare type Items<T extends readonly any[][]> = {
    [P in keyof T]?: T[P][Extract<keyof T[P], number>];
};
declare const _default: <T extends readonly any[][]>(arrs: T, callback: (values: Items<T>, idx: number) => void | boolean) => void;
export default _default;
