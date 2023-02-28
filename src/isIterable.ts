export default <T>(obj: any): obj is Iterable<T> => typeof obj?.[Symbol.iterator] === 'function'
