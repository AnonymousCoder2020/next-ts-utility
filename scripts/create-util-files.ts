import { promises as fs } from 'fs'
import glob from 'glob'
import { promisify } from 'util'
;(async () => {
  for (const file of await promisify(glob)('./src/*/*.test.ts')) {
    const utilName = file.match(/\.\/src\/([^\/]+)\/.+test\.ts/)?.[1]

    const toPath = `./src/${utilName}.test.ts`

    console.log({ utilName, toPath })
    await fs.rename(`./src/${utilName}/${utilName}.test.ts`, toPath)

    // テストファイルimport書き換え
    const res = await fs.readFile(toPath, 'utf-8')
    res.replace("import util from './'", `import util from './${utilName}'`)
    console.log(res)
    try {
      await fs.writeFile(toPath, res)
    } catch (err) {
      console.log(err)
    }

    // フォルダ削除
    try {
      await fs.unlink(`./src/${utilName}`)
    } catch (err) {
      console.log(err)
    }
  }
})()
