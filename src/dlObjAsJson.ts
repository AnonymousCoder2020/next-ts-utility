import { JSONObj } from 'next-type-utility'

type StringifyParan = Parameters<typeof JSON.stringify>
interface ExportOpt {
  stringifyArgs: [StringifyParan[1]?, StringifyParan[2]?]
}
export default (dataObj: JSONObj, fileName: string, opt?: ExportOpt) => {
  const { stringifyArgs = [] } = opt ?? {}
  const textData = JSON.stringify(dataObj, ...stringifyArgs)
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([textData], { type: 'application/json' }))
  a.download = fileName + '.json'
  a.click()
}
