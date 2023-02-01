export default (root, recursionDef, callback) => {
    const items = [];
    let stacks = [root];
    let nextDepStack = [];
    let dep = 0;
    top: do {
        for (const stack of stacks) {
            const res = callback?.(stack, dep);
            if (res === false)
                break top;
            items.push(stack);
            const children = recursionDef(stack);
            if (children?.length)
                nextDepStack.push(...children);
        }
        stacks = nextDepStack;
        nextDepStack = [];
        dep++;
    } while (stacks.length);
    return items;
};
