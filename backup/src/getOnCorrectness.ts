interface Branch {
  true: () => any
  false: () => any
}

export default <B extends boolean, T extends Branch>(bool: B, branch: T): B extends true ? ReturnType<T['true']> : ReturnType<T['false']> => {
  return branch[bool.toString() as 'true' | 'false']()
}
