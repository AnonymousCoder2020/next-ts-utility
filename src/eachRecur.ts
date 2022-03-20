export default <I>(root: I, recursionDef: (arg: I) => I[] | undefined, callback?: (item: I, depth: number) => void | boolean) => {
  const items: I[] = []
  let stacks: I[] = [root]
  let nextDepStack: I[] = []
  let dep = 0
  top: do {
    for (const stack of stacks) {
      const res = callback?.(stack, dep)
      if (res === false) break top
      items.push(stack)
      const children = recursionDef(stack)
      if (children?.length) nextDepStack.push(...children)
    }
    stacks = nextDepStack
    nextDepStack = []
    dep++
  } while (stacks.length)
  return items
}
