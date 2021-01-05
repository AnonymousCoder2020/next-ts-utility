export default <I>(list?: I[], ...items: I[]) => (list ?? ([] as I[])).concat(items)
