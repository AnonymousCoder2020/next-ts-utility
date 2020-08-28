import { promises as fs } from 'fs'
const getFileName = (fileName: string) => fileName.match(/(.*?)\..*/)?.[1] ?? fileName
const getExtension = (fileName: string) => fileName.match(/(?!=\.)[^.]+$/)?.[0]

;(async () => {
  const removeFileNames = ['index']
  const utils = (await fs.readdir('./src'))
    .map(file => getFileName(file))
    .filter(fileName => fileName.length && removeFileNames.every(removeFileName => removeFileName !== fileName))
  const indexTsValue = utils.map(fileName => `export { default as ${fileName} } from './${fileName}'`).join('\n')

  try {
    fs.writeFile('./src/index.ts', indexTsValue)
    console.log('done!')
  } catch (err) {
    console.warn(err)
  }

  // dist内に書き出されていたが、現在では存在しない名前のmethodを一部除去
  ;(await fs.readdir('./dist'))
    .filter((file: string) => {
      const fileName = getFileName(file)
      const extension = getExtension(file)
      return utils.every(methodName => methodName !== fileName) || (extension && ['ts', 'js'].includes(extension) && fileName !== 'index')
    })
    .forEach(fileName => fs.unlink(`./dist/${fileName}`))
})()
