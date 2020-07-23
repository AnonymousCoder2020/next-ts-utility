import { promises as fs } from 'fs'
const getFileName = (fileName: string) => fileName.match(/(.*?)\..*/)?.[1] ?? ''

;(async () => {
  const removeFileNames = ['index', 'map-methods']
  const methodNames = (await fs.readdir('./src'))
    .map(file => getFileName(file))
    .filter(fileName => removeFileNames.every(removeFileName => removeFileName !== fileName))
  const indexTsValue = methodNames.map(fileName => `export { default as ${fileName} } from './${fileName}'`).join('\n')

  try {
    fs.writeFile('./src/index.ts', indexTsValue)
    console.log('done!')
  } catch (err) {
    console.warn(err)
  }

  // dist内に書き出されていたが、現在では存在しない名前のmethodを一部除去
  ;(await fs.readdir('./dist'))
    .filter((fileName: string) => methodNames.every(methodName => methodName !== getFileName(fileName)))
    .forEach(fileName => fs.unlink(`./dist/${fileName}`))
})()
