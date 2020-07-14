export const between = (a: number, b: number, step: number = 1) => {
  const surplus = (b - a) % step
  const betweenLength = Math.abs(Math.trunc((b - a) / step)) - (surplus ? 0 : 1)
  if (!betweenLength) return []
  step = b < a ? -step : step
  const start = (0 < step ? Math.min(a, b) : Math.max(a, b)) + step
  return Array(betweenLength)
    .fill(0)
    .reduce((acc, _, i) => acc.concat([start + i * step]), [])
}
