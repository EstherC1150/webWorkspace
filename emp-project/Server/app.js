//app.js : 서버역할
require("dotenv").config({
  path: "./db/mysql.env",
}); //환경변수 : 첫번째 줄에서 읽을 수 있게 써주어야 함
const express = require("express");
const app = express();
const mysql = require("./db.js");

app.use(
  express.json({
    limit: "50mb",
  })
);

//미들웨어 역할을 추가하고 싶으면 app으로 해서 추가하면 됨

//listen : 서버를 실행시키는 것
app.listen(3000, () => {
  console.log("Server Start!, http://localhost:3000");
});

// ----------------이까지가 express 서버 기본셋팅!
// 기본셋팅이 끝났다면, db폴더를 기반으로 sql먼저 작성하기

//Rest는 자원에 대한 경로를 담는다
app.get("/emps", async (req, res) => {
  let list = await mysql.query("empList");
  res.send(list);
});

app.get("/emps/:no", async (req, res) => {
  let empNo = req.params.no;
  let list = await mysql.query("empInfo", empNo);
  res.send(list[0]);
});

app.get("/depts", async (req, res) => {
  let list = await mysql.query("dept");
  res.send(list);
});

const empTable = ["emp_no", "first_name", "last_name", "gender", "hire_date"];
const deptEmpTable = ["emp_no", "dept_no", "from_date", "to_date"];
const salariesTable = ["emp_no", "salary", "from_date", "to_date"];

app.post("/emps", async (req, res) => {
  let empInfo = req.body.param;

  let empData = {};
  //지금 밑의 for문이 자바스크립트이기에 가능함, 실행 도중에 값을 계속 덮어쓰고 넣는것
  for (let column of empTable) {
    //let column = 'emp_no'
    let value = empInfo[column]; //let value = empInfo['emp_no']
    if (value == "") continue; //날짜포맷에는 차라리 null이 들어가야 함
    empData[column] = value; //empData['emp_no']
  }
  console.log(empData);
  let result = await mysql.query("empInsert", empData);

  //배열 형태로 값을 넘길 때는 컬럼 순서가 중요, 일치해야함
  let deptEmpData = [];
  for (let column of deptEmpTable) {
    let value = empInfo[column];
    if (value == "") continue;
    deptEmpData.push(value);
  }
  console.log(deptEmpData);
  result = await mysql.query("deptEmpInsert", deptEmpData);

  let salData = {};
  for (let column of salariesTable) {
    let value = empInfo[column];
    if (value == "") continue;
    salData[column] = value;
  }
  console.log(salData);
  salData.to_date = "9999-01-01";
  result = await mysql.query("salariesInsert", salData);

  //결과를 보내겠다. 돌려주겠다...
  //보낼게 없으면 end라도 시키기...
  res.send(result);
  // res.end(); //이게 없으면 통신이 끊기지도 않는다 : 될수있음 안쓰는게 가장 좋다
});

app.put("/emps/:no", async (req, res) => {
  let data = [req.body.param, req.params.no];
  let result = await mysql.query("empUpdate", data);
  res.send(result);
});

app.delete("/emps/:no", async (req, res) => {
  //실행하는 쿼리문이 중요한게 아니고 화면 입장에서는 삭제한다고 보기 때문에 delete로 결정하는것
  //화면에서 진행하는 기능과 실제 db에서 하는 기능에는 차이가 있을 수 있다
  //put, post는 body허용
  //**delete는 기본적으로 body부분이 없다
  //다만 express와 같이 몇가지는 body허용을 지원하고 있다

  //2. 오늘 날짜로 강제 처리하는 방식
  //1. 사용자가 퇴사날짜를 지정하는 방식 --> body필요
  //물음표가 1개가 아니고 2개(2개이상이면 무조건 배열로)여서 배열로...
  //object인지 아닌지 : 하나의 물음표를 봤을 때 컬럼이 명시되어있는지 보면 됨
  //오브젝트는 컬럼이 명확하지않아서, 두번째는 명확해서 그냥 값
  //따라서 지금 delete는 쿼리문을 봤을 때 지정되어있기 때문에 그냥 값
  let data = [req.body.param.to_date, req.params.no];
  let result = await mysql.query("empDelete", data);
  res.send(result);
});
