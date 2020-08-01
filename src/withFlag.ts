export default (reg: RegExp, flag: string | string[]) => {
  const flagsForAdd = [...new Set(Array.isArray(flag) ? flag : flag.split(''))]
  const { flags } = reg
  return new RegExp(reg.source, flags + flagsForAdd.filter(flagForAdd => !~flags.indexOf(flagForAdd)).join(''))
}
