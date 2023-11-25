export default (str, divIdxs) => {
    const resStrs = [];
    divIdxs = divIdxs.filter(idx => !Number.isNaN(idx) && idx < str.length).sort((a, b) => b - a);
    for (const idx of divIdxs) {
        resStrs.unshift(str.slice(idx));
        str = str.slice(0, idx);
    }
    resStrs.unshift(str);
    return resStrs;
};
