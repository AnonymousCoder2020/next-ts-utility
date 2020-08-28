declare type ArrayList = readonly (readonly any[])[];
declare type Item<L extends ArrayList> = L[number][number];
declare type Callback<L extends ArrayList> = (i: Item<L>, index: {
    row: number;
    column: number;
}) => void | boolean;
declare const _default: <L extends ArrayList>(rows: L, callback: Callback<L>) => void;
export default _default;
