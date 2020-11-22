declare const _default: <I, T extends I>(list: I[], callback: (item: I, i: number) => item is T) => readonly [T[], Exclude<I, T>[]];
export default _default;
