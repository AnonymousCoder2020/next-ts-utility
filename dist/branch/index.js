export default (branches) => {
    for (const [bool, fn] of branches) {
        if (bool)
            return fn();
    }
};
