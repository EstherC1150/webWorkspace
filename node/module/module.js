//import OR require

//같은 레벨의 파일 불러올때 './' 붙인다.
//상위 레벨은 '../'

//본격적으로 작성하기 전에 선언해서 불러오기
// const cal = require('./calculator'); //통째로 받는것
const { add, minus } = require('./calculator'); //특정 대상만 받음 >> 요즘은 이렇게 많이 쓴다

console.log(add(10,25));
console.log(minus(25,3));
