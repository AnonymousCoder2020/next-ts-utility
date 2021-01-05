export default (value, classes) => {
    return classes.every(cls => value instanceof cls);
};
