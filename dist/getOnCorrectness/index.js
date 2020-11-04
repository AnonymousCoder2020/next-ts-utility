export default (cond, branch) => {
    return branch[(!!cond).toString()](cond);
};
