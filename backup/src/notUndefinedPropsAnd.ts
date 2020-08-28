export default <P extends number | string, T extends { [K in P]?: any }>(obj: T, props: P[]): obj is T & { [K in P]: Exclude<T[K], undefined> } => {
  return props.every(propName => obj[propName] !== undefined)
}
