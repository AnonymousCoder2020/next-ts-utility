import { promises as fs } from 'fs';
const removeFileNames = ['index', 'map-methods'];
const indexTsValue = (await fs.readdir('./src'))
    .map(file => { var _a, _b; return (_b = (_a = file.match(/(.*)\..*/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : ''; })
    .filter(fileName => removeFileNames.every(removeFileName => removeFileName !== fileName))
    .map(fileName => `export { default as ${fileName} } from './${fileName}'`)
    .join('\n');
try {
    fs.writeFile('./src/index.ts', indexTsValue);
    console.log('done!');
}
catch (err) {
    console.warn(err);
}
