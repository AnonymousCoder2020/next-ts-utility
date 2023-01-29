type ArrayList = readonly (readonly any[])[];
type Items<T extends ArrayList> = {
    [P in keyof T]?: T[P][Extract<keyof T[P], number>];
};
type Callback<T extends ArrayList> = (values: Items<T>, idx: number) => void | boolean | Promise<void | boolean>;
declare const _default: <T extends ArrayList>(arrs: T, callback: Callback<T>) => Promise<void>;
export default _default;
