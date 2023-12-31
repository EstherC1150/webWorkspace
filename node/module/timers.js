const timeout = setTimeout(() => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDay()).slice(-2);
    
    console.log(`${year}년${month}월${day}일`);
}, 1000);

let count = 0;
const interval = setInterval(() => {
    console.log('interval %d', count++);
    if(count == 5){
        clearInterval(interval);
    }
}, 1000);

const immediate = setImmediate(() => {  //쓸 때 주의해야한다...
    console.log('즉시 실행 요청');
});

console.log('마지막 코드');