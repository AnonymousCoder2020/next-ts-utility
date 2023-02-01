export default (callback) => {
    let err, res;
    try {
        res = callback();
    }
    catch (error) {
        console.warn(error);
        err = error;
    }
    return (res && res instanceof Promise
        ? new Promise(resolve => res
            .then(finallyRes => resolve([finallyRes, err]))
            .catch(error => resolve([undefined, error])))
        : [res, err]);
};
