import regAs from './regAs'
import withFlag from './withFlag'
export default (v: string | RegExp, flag?: string) => {
  if (typeof v == 'string') return regAs(v, flag)
  return flag ? withFlag(v, flag) : v
}
