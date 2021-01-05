export default (x: number, n: number) => [...Array(n).keys()].reduce((acc, i) => (acc.push(((x + n - i - 1) / n) | 0), acc), [] as number[])
