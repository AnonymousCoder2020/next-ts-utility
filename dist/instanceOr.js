export default (value, instances) => {
    return instances.some(instance => value instanceof instance);
};
