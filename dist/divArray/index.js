export default (a, n) => {
    const re = [];
    for (let i = n - 1, aLen = a.length, cur = 0; 0 <= i; i--) {
        const divNum = ((aLen + i) / n) | 0, next = cur + divNum;
        re.push(a.slice(cur, next));
        cur = next;
    }
    return re;
};
