import { mergeWith, isPlainObject } from 'lodash';
export default (merge, base) => {
    return mergeWith(merge, base, (obj) => {
        return isPlainObject(obj) ? undefined : obj;
    });
};
