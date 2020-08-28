export default (bool, branch) => {
    return branch[bool.toString()]();
};
