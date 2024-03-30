interface EachRecurOpt<I> {
  callback?: (item: I, depth: number) => void | boolean
  includeRoot?: false
}

export default <I>(root: I, leadToSub: (arg: I) => I[] | undefined, { callback, includeRoot }: EachRecurOpt<I> = {}) => {
  const items: I[] = []
  let stacks: I[] = [root]
  let nextDepStack: I[] = []
  let dep = 0
  top: do {
    for (const stack of stacks) {
      const res = callback?.(stack, dep)
      if (res === false) break top
      items.push(stack)
      const children = leadToSub(stack)
      if (children?.length) nextDepStack.push(...children)
    }
    stacks = nextDepStack
    nextDepStack = []
    dep++
  } while (stacks.length)
  return includeRoot === false ? items : items.filter(item => item !== root)
}
