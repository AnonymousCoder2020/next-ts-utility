declare type ArrayList = readonly (readonly any[])[];
declare type Items<T extends ArrayList> = {
    [P in keyof T]?: T[P][Extract<keyof T[P], number>];
};
declare type Callback<T extends ArrayList> = (values: Items<T>, idx: number) => void | false | Promise<void | false>;
declare const _default: <T extends ArrayList>(arrs: T, callback: Callback<T>) => Promise<void>;
export default _default;
