//구조분해할당(Destructuring assignment)

//{} --> 객체 값을 분해
//[] --> 배열을 분해
let obj = {
    id : 100,
    name : 'Hong',
    birth : '1999-12-25'
}

let { id, name, age } = obj; //변수가 가진 값이 특정 객체에 있는 프로퍼티다, 변수가 특정한 값을 가지도록 변수 선언
console.log(id, name, age);

// module.export = {
//     object : {},
//     method : function(){}
// }
// let {object, method} = module;

let array = ['Hello', 'Nice', 'Monday'];
let [x, y] = array; //x, y, z는 내가 설정하는 이름 but 무조건 인덱스 순서대로 값이 부여된다
console.log(x,y);