import { isPlainObject, mergeWith } from 'lodash'
import { DeepPartial } from 'ts-essentials'

export default <T extends object>(base: T, ...merge: DeepPartial<T>[]): T => {
  return merge.reduce((b, m) => {
    return mergeWith(m, b, (obj: unknown) => {
      return isPlainObject(obj) ? void 0 : obj
    })
  }, base)
}
