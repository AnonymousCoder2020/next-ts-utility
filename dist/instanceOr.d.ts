type ToInstances<L extends readonly CommonClass[]> = {
    [P in Extract<keyof L, number>]: L[P]['prototype'];
}[Extract<keyof L, number>];
type CommonClass = {
    new (): object;
    prototype: object;
};
declare const _default: <L extends CommonClass[]>(value: unknown, classes: L) => value is ToInstances<L>;
export default _default;
