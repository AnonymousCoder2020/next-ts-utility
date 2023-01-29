interface Branch<T, F, C> {
  true: (cond: C) => T
  false: (cond: C) => F
}

export default <T, F, C>(cond: C, branch: Branch<T, F, C>) => {
  return branch[(!!cond).toString() as 'true' | 'false'](cond) as C extends undefined | null | void | false ? F : T
}
