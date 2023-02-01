export default (dataObj, fileName, opt) => {
    const { stringifyArgs = [] } = opt ?? {};
    const textData = JSON.stringify(dataObj, ...stringifyArgs);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([textData], { type: 'application/json' }));
    a.download = fileName + '.json';
    a.click();
};
