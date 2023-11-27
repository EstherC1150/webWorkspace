let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dat = date.getDay();

//백틱은 줄 바꿈 허용
let msg = `${year}년
${month}월
${dat}일`; 

console.log(msg);