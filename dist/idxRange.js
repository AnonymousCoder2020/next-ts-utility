import { isNumber } from 'lodash-es';
export default (target, matcher) => {
    let matchRes;
    if (matcher instanceof RegExp) {
        const tempMatchRes = target.match(matcher);
        if (!tempMatchRes)
            return;
        matchRes = tempMatchRes;
    }
    const firstIdx = matchRes?.index ?? (typeof matcher === 'string' && target.indexOf(matcher));
    const matchLength = matchRes?.[0].length ?? (typeof matcher === 'string' && matcher.length);
    if (!isNumber(firstIdx) || !isNumber(matchLength) || !~firstIdx)
        return;
    return [firstIdx, firstIdx + matchLength];
};
