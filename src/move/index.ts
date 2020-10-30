export default <T>(a: T[], i: number, n: number) => {
  if (i == n) return a
  const v = a[i]
  return a.splice(i, 1), a.splice(n, 0, v), a
}
