type ArrayList = readonly (readonly any[])[];
type Item<L extends ArrayList> = L[number][number];
type Callback<L extends ArrayList> = (i: Item<L>, index: {
    row: number;
    column: number;
}) => void | boolean;
declare const _default: <L extends ArrayList>(rows: L, callback: Callback<L>) => void;
export default _default;
