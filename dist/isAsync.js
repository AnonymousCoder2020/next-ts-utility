export default (func) => ['AsyncFunction', 'AsyncGeneratorFunction'].some(asyncName => func.constructor.name === asyncName);
