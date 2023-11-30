//매개변수 기본값
function printMsg( msg = '메세지를 입력해주세요', to =''){ //매개변수가 더 필요하면 저렇게 계속 나열해주면 된다
    console.log(msg);
}

printMsg('Have a Nice Day');
printMsg();


//나머지 매개변수
function sum(x, y, ...args){ //혹시라도 사용자가 2개 이상의 수의 값을 더할 경우?!
    let result = x + y;
    console.log(args.length);
    for(let num of args) { //나머지매개변수 쓰는 경우 for - of를 많이 쓴다
        result += num;
    }
    return result;
}

console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));