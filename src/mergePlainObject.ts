import { DeepPartial } from 'ts-essentials'
import { mergeWith, isPlainObject } from 'lodash'

export default <T extends object>(merge: DeepPartial<T>, base: T): T => {
  return mergeWith(merge, base, (obj: any) => {
    return isPlainObject(obj) ? undefined : obj
  })
}
