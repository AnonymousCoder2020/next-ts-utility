export const condProp = (bool, obj) => (bool ? obj : {});
export const condProps = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, [bool]]) => bool).map(([key, [_, val]]) => [key, val]));
};
export const notUndefinedPropsAnd = (obj, props) => {
    return props.every(propName => obj[propName] !== undefined);
};
// 再考の余地あり
export const instanceAnd = (value, instances) => {
    return instances.every(instance => value instanceof instance);
};
export const instanceOr = (value, instances) => {
    return instances.some(instance => value instanceof instance);
};
//# sourceMappingURL=index.js.map