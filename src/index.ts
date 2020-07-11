import { DeepPartial } from 'ts-essentials'
import { mergeWith, isPlainObject } from 'lodash'

type condPropsObject<T> = {
  [P in keyof T]: [boolean, T[P]]
}

export const condProps = <T>(obj: condPropsObject<T>) => {
  return Object.fromEntries(
    (Object.entries(obj) as [keyof T, [boolean, T[keyof T]]][]).filter(([_, [bool]]) => bool).map(([key, [_, val]]) => [key, val])
  ) as { [P in keyof T]?: T[P] }
}

export const notUndefinedPropsAnd = <P extends number | string, T extends { [K in P]?: any }>(
  obj: T,
  props: P[]
): obj is T & { [K in P]: Exclude<T[K], undefined> } => {
  return props.every(propName => obj[propName] !== undefined)
}

// 再考の余地あり
export const instanceAnd = <A>(value: unknown, instances: { new (): A }[]): value is A => {
  return instances.every(instance => value instanceof instance)
}

export const instanceOr = <A>(value: unknown, instances: { new (): A }[]): value is A => {
  return instances.some(instance => value instanceof instance)
}

export const mergePlainObject = <T extends object>(merge: DeepPartial<T>, base: T) => {
  return mergeWith(merge, base, (obj: any) => {
    return isPlainObject(obj) ? undefined : obj
  })
}

export * from './dom'
