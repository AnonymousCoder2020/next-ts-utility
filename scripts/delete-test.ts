import { promises as fs } from 'fs'
import glob from 'glob'
import { promisify } from 'util'
;(async () => {
  ;(await promisify(glob)('./dist/*/*.test.*')).forEach(file => fs.unlink(file))
})()
