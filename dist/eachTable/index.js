export default (rows, callback) => {
    let rowIdx = 0;
    for (const row of rows) {
        let columnIdx = 0;
        for (const item of row) {
            if (callback(item, { row: rowIdx, column: columnIdx }) === false)
                return;
            columnIdx++;
        }
        rowIdx++;
    }
};
