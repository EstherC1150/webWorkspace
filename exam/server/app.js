require("dotenv").config({
  path: "./db/mysql.env",
});
const express = require("express");
const app = express();
const mysql = require("./db.js");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("Server Start!, http://localhost:3000");
});

app.get("/boards", async (req, res) => {
  let list = await mysql.query("boardList");
  res.send(list);
});

app.get("/boards/:no", async (req, res) => {
  let boardNo = req.params.no;
  let list = await mysql.query("boardInfo", boardNo);
  res.send(list[0]);
});

app.post("/boards", async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query("boardInsert", data);
  res.send(result);
});

app.put("/boards/:no", async (req, res) => {
  let datas = [req.body.param, req.params.no];
  let result = await mysql.query("boardUpdate", datas);
  res.send(result);
});

app.delete("/boards/:no", async (req, res) => {
  let data = req.params.no;
  let result = await mysql.query("boardDelete", data);
  res.send(result);
});
