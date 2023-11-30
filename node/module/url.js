const url = require('url');
let legercy = url.parse('httpS://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(legercy);

let whatwg = new URL('httpS://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg);
// console.log(whatwg.searchParams);
console.log(whatwg.searchParams.get('query'));