interface EachRecurOpt<I> {
    callback?: (item: I, depth: number) => void | boolean;
    includeRoot?: false;
}
declare const _default: <I>(root: I, leadToSub: (arg: I) => I[] | undefined, { callback, includeRoot }: EachRecurOpt<I>) => I[];
export default _default;
