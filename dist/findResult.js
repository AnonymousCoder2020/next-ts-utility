export default (iterator, callback) => {
    let i = 0;
    for (const item of iterator) {
        const res = callback(item, i);
        if (res)
            return res;
    }
};
