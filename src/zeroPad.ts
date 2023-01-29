export default (int: number, padNum: number) => ('0'.repeat(padNum) + int).slice(-padNum)
