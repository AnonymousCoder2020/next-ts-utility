export default async (arr, callback) => {
    let i = 0;
    while (i < arr.length) {
        const res = await callback(arr[i], i);
        if (res === false)
            return;
        i++;
    }
};
