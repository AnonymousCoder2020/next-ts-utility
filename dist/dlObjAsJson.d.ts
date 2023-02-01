import { JSONObj } from 'next-type-utility';
type StringifyParan = Parameters<typeof JSON.stringify>;
interface ExportOpt {
    stringifyArgs: [StringifyParan[1]?, StringifyParan[2]?];
}
declare const _default: (dataObj: JSONObj, fileName: string, opt?: ExportOpt) => void;
export default _default;
