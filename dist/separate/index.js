export default (list, callback) => {
    let trueList = [];
    let falseList = [];
    let i = 0;
    for (const item of list) {
        callback(item, i) ? trueList.push(item) : falseList.push(item);
        i++;
    }
    return [trueList, falseList];
};
