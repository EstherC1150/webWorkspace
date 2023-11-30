const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

module.exports = {  //exports는 객체를 요구, 따라서 객체여야 한다 무조건
    defaultNum,
    add,
    minus,
    multi,
    divide  // divide : divede 라는 뜻, 동일한 이름일 때에 이렇게 많이 쓴다
}

// module, export 두개가 공존할 순 없음
// export default {
     //import로 받는다
// }