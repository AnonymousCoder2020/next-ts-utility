export default (label) => {
    const start = performance.now();
    return () => {
        const end = performance.now();
        console.log(label, (end - start).toFixed(3));
    };
};
