export default (value, classes) => {
    return classes.some(cls => value instanceof cls);
};
