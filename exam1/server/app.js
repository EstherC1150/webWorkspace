require("dotenv").config({ path: "./mysql/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);
// 쿼리 스트링 사용해서 할 때 일단 파써 하나 더 만들어주기
// 가장 기본적인 형태로 할 거기 때문에 일단은 false
app.use(express.urlencoded({ extended: false }));

const server = app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

const db = require("./db.js");

//params : header에 붙은 애들을 가지고 온다
//body : put, post만 존재 : body라는 속성을 기반으로 접근
//경로에 붙어서 :으로 가는건 params , JSON방식은 body

//전체조회
app.get("/boards", async (request, res) => {
  res.send(await db.connection("boardList"));
});

//단건조회
app.get("/boards/:bno", async (request, res) => {
  res.send((await db.connection("boardInfo", request.params.bno))[0]);
});

// REST API 기준
//등록 : post(REST 방식에서는)
app.post("/boards", async (request, response) => {
  let data = request.body.param;
  response.send(await db.connection("boardInsert", data));
});

//수정
app.put("/boards/:bno", async (request, response) => {
  //모듈이 실행하는 쿼리문에 물음표가 2개니까 배열
  //그런데 서로 다른 타입
  let data = [request.body.param, request.params.bno];
  response.send(await db.connection("boardUpdate", data));
});

// node환경에서 쿼리스트링 처리해보기 ↓
// 필요하다면 결합해서 써도 됨
//해당 게시글의 댓글조회
app.get("/comments", async (request, res) => {
  //qeurystring => ?key=value&key=value...
  //우리가 넘겨줄 키값 bno
  let data = request.query.bno;
  res.send(await db.connection("commentList", data));
});
