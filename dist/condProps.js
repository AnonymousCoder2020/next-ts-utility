export default (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, [bool]]) => bool).map(([key, [_, val]]) => [key, val]));
};
