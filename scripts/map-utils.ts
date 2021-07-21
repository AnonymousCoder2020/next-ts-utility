import fs from 'fs-extra'
const getFileName = (fileName: string) => fileName.match(/(.*?)\..*/)?.[1] ?? fileName
const getExtension = (fileName: string) => fileName.match(/(?<=\.)[^.]+$/)?.[0]

;(async () => {
  const ignoreFileNames = ['index']
  const utils = ((await fs.readdir('./src')) as string[])
    .map(file => getFileName(file))
    .filter(fileName => fileName.length && ignoreFileNames.every(removeFileName => removeFileName !== fileName))
  const indexTsValue = utils.map(fileName => `export { default as ${fileName} } from './${fileName}'`).join('\n')

  try {
    fs.writeFile('./src/index.ts', indexTsValue)
    console.log('done!')
  } catch (err) {
    console.warn(err)
  }

  // dist内に書き出されていたが、現在では存在しない名前のmethodを一部除去
  ;(await fs.readdir('./dist')).forEach((file: string) => {
    const fileName = getFileName(file)
    const extension = getExtension(file)
    const isRemove = utils.every(methodName => methodName !== fileName) || (fileName !== 'index' && extension && !['ts', 'js'].includes(extension))
    if (!isRemove) return
    // ここで削除が決定
    const removePath = `./dist/${file}`
    fs.remove(removePath)
  })
})()
