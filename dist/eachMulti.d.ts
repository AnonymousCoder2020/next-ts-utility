type ArrayList = readonly (readonly any[])[];
type Items<T extends ArrayList> = {
    [P in keyof T]?: T[P][Extract<keyof T[P], number>];
};
declare const _default: <T extends ArrayList>(arrs: T, callback: (values: Items<T>, idx: number) => void | boolean) => void;
export default _default;
