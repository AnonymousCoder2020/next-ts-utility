export default (html: string) => new DOMParser().parseFromString(html, 'text/html').documentElement.textContent ?? ''
