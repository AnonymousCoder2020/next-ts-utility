type condPropsObject<T> = {
  [P in keyof T]: [boolean, T[P]]
}

export default <T>(obj: condPropsObject<T>) => {
  return Object.fromEntries(
    (Object.entries(obj) as [keyof T, [boolean, T[keyof T]]][]).filter(([_, [bool]]) => bool).map(([key, [_, val]]) => [key, val])
  ) as { [P in keyof T]?: T[P] }
}
