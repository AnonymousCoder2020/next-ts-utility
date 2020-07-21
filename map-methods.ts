import { promises as fs } from 'fs'

;(async () => {
  const removeFileNames = ['index', 'map-methods']
  const indexTsValue = (await fs.readdir('./src'))
    .map(file => file.match(/(.*)\..*/)?.[1] ?? '')
    .filter(fileName => removeFileNames.every(removeFileName => removeFileName !== fileName))
    .map(fileName => `export { default as ${fileName} } from './${fileName}'`)
    .join('\n')

  try {
    fs.writeFile('./src/index.ts', indexTsValue)
    console.log('done!')
  } catch (err) {
    console.warn(err)
  }
})()
