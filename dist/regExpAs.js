import { escapeRegExp } from 'lodash-es';
export default (matcher, flag) => new RegExp(escapeRegExp(escapeRegExp(matcher)), flag);
