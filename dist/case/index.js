export default (item, branches, compareMethod) => {
    for (const [compare, fn] of branches) {
        const isMatch = compareMethod ? compareMethod(item, compare) : item === compare;
        if (isMatch)
            return fn();
    }
};
