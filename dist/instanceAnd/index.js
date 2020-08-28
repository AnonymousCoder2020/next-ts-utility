export default (value, instances) => {
    return instances.every(instance => value instanceof instance);
};
