export default (x, n) => [...Array(n).keys()].reduce((acc, i) => (acc.push(((x + n - i - 1) / n) | 0), acc), []);
