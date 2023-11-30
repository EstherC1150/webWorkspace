//File System
const fs = require('fs');

const data = 'Hello, World!!';
fs.writeFileSync('./sample.txt', data, 'utf8'); //sync를 기반으로 실행

// fs.readFile('./sample.txt', 'utf8', (err) => {  //동기화하지 않고 처리하는 방식 : 비동기
//     if(err) {
//         throw err;
//     }
//     console.log('파일 쓰기 완료!');
// });

fs.readFile('./sample.txt', 'utf8', (err, data) => { //비동기
    if(err){
        throw err;
    }
    console.log(data);
});

//현재 한글을 다루는 인코딩 방식은 = 'utf8'
