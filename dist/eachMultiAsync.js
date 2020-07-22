export default async (arrs, callback) => {
    const maxLen = Math.max(...arrs.map(arr => arr.length));
    let i = 0;
    let loopCondition = true;
    while (loopCondition && i < maxLen) {
        const bool = await callback(arrs.map(arr => arr[i]), i);
        if (typeof bool == 'boolean')
            loopCondition = bool;
        i++;
    }
};
