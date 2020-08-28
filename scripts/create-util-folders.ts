import { promises as fs } from 'fs'
import { promisify } from 'util'
import glob from 'glob'
;(async () => {
  const ignoreFiles = ['index']

  const utilFiles = (await promisify(glob)('./src/*.ts'))
    .map(file => file.replace(/^\.\/src\//, '').replace(/\.[^.]+$/, ''))
    .filter(file => !ignoreFiles.some(ignoreFile => ignoreFile === file))

  for (const utilFile of utilFiles) {
    await fs.mkdir(`./src/${utilFile}`)
    await fs.rename(`./src/${utilFile}.ts`, `./src/${utilFile}/index.ts`)
    await fs.writeFile(`./src/${utilFile}/${utilFile}.test.ts`, `import util from './'\n\ndescribe('${utilFile}', () => {\n  \n})`)
  }
})()
