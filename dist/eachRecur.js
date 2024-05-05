export default (root, leadToSub, { callback, includeRoot } = {}) => {
    const items = [];
    let stacks = [root];
    let nextDepStack = [];
    let dep = 0;
    top: do {
        for (const stack of stacks) {
            if (callback?.(stack, dep) === false)
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
    return includeRoot === false ? items.filter(item => item !== root) : items;
};
