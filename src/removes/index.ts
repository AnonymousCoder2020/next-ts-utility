export default <T extends unknown, F extends T>(arr: readonly T[], removeItem: F) => arr.filter(item => item !== removeItem)
