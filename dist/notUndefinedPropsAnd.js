export default (obj, props) => {
    return props.every(propName => obj[propName] !== undefined);
};
