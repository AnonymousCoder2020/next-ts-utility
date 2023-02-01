export default (htmlTxt: string) => new DOMParser().parseFromString(htmlTxt, 'text/html')
