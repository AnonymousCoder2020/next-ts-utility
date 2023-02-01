export default (html) => new DOMParser().parseFromString(html, 'text/html').documentElement.textContent ?? '';
