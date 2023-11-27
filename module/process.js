const process = require('process'); 
const os = require('os');

// console.log(process.env);
console.log(process.env.JAVA_HOME); //내가 가지고 오고싶은건 key값 이용해서 .key 로 가져오기
console.log(process.env.OS);

// console.log(os);
console.log(os.cpus()); //CPU 코어 정보
console.log(os.tmpdir()); //임시 저장 경로