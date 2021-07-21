export default (start, end, step = 1) => {
    const surplus = (end - start) % step;
    const betweenLength = Math.abs(Math.trunc((end - start) / step)) - (surplus ? 0 : 1);
    if (!betweenLength)
        return [];
    step = end < start ? -step : step;
    const _start = (0 < step ? Math.min(start, end) : Math.max(start, end)) + step;
    return Array(betweenLength)
        .fill(0)
        .reduce((acc, _, i) => acc.concat([_start + i * step]), []);
};
