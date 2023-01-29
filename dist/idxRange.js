import { isNumber } from 'lodash-es';
export default (target, matcher) => {
    var _a, _b;
    let matchRes;
    if (matcher instanceof RegExp) {
        const tempMatchRes = target.match(matcher);
        if (!tempMatchRes)
            return;
        matchRes = tempMatchRes;
    }
    const firstIdx = (_a = matchRes === null || matchRes === void 0 ? void 0 : matchRes.index) !== null && _a !== void 0 ? _a : (typeof matcher === 'string' && target.indexOf(matcher));
    const matchLength = (_b = matchRes === null || matchRes === void 0 ? void 0 : matchRes[0].length) !== null && _b !== void 0 ? _b : (typeof matcher === 'string' && matcher.length);
    if (!isNumber(firstIdx) || !isNumber(matchLength) || !~firstIdx)
        return;
    return [firstIdx, firstIdx + matchLength];
};
