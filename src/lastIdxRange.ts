import { isNumber } from 'lodash-es'
import withFlag from './withFlag'

export default (target: string, matcher: string | RegExp) => {
  let matchRes: RegExpMatchArray | undefined
  if (matcher instanceof RegExp) {
    const tempMatchRes = [...target.matchAll(withFlag(matcher, 'g'))]
    if (!tempMatchRes.length) return
    matchRes = tempMatchRes[tempMatchRes.length - 1]
  }
  const firstIdx = matchRes?.index ?? (typeof matcher === 'string' && target.lastIndexOf(matcher))
  const matchLength = matchRes?.[0].length ?? (typeof matcher === 'string' && matcher.length)
  if (!isNumber(firstIdx) || !isNumber(matchLength) || !~firstIdx) return
  return [firstIdx, firstIdx + matchLength]
}
