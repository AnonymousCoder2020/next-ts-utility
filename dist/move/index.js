export default (a, i, n) => {
    if (i == n)
        return a;
    const v = a[i];
    return a.splice(i, 1), a.splice(n, 0, v), a;
};
