import { isPlainObject } from 'lodash-es'
import { PlainObj } from 'next-type-utility'
export default (obj: unknown): obj is PlainObj<unknown> => isPlainObject(obj)
