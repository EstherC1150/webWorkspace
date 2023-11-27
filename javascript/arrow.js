//함수선언식 --> 언제든 덮어씌어질 수 있음
function hello(name) {
    return "Hello, " + name;
}

let arrHello = (name) => {return "Hello, " + name;}
arrHello = name => "Hello, " + name;

//함수표현식 --> 반드시 위에 배치되어야 한다
const message = function (msg){
    return "msg : " + msg;
}

let arrMessage = (msg) => {return "msg : " + msg;}
arrMessage = msg => "msg : " + msg;
arrMessage = () => {
    let today = new Date().getDay();
    console.log("오늘 날짜", today);
}

function hello(msg) {
    return "msg, Hello : " + msg; 
}

arrMessage();