export default (root, leadToSub, { callback, includeRoot }) => {
    const items = [];
    let stacks = includeRoot === false ? [root] : [];
    let nextDepStack = [];
    let dep = 0;
    top: do {
        for (const stack of stacks) {
            const res = callback?.(stack, dep);
            if (res === false)
                break top;
            items.push(stack);
            const children = leadToSub(stack);
            if (children?.length)
                nextDepStack.push(...children);
        }
        stacks = nextDepStack;
        nextDepStack = [];
        dep++;
    } while (stacks.length);
    return items;
};
