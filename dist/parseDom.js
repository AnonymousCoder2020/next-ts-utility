export default (htmlTxt) => new DOMParser().parseFromString(htmlTxt, 'text/html');
