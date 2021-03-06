import { isPlainObject, mergeWith } from 'lodash-es';
export default (base, ...merge) => {
    return merge.reduce((b, m) => {
        return mergeWith(m, b, (obj) => {
            return isPlainObject(obj) ? void 0 : obj;
        });
    }, base);
};
