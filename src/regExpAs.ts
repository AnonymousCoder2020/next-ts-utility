import { escapeRegExp } from 'lodash-es'

export default (matcher: string, flag?: string) => new RegExp(escapeRegExp(escapeRegExp(matcher)), flag)
