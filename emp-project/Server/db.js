const mysql = require("mysql"); //모듈 불러오기
const sql = require("./db/sql.js"); //sql문

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  connectionLimit: process.env.MYSQL_LIMIT,
});

//쿼리는 반드시 비동기 방식으로 진행해 주어야 한다
const query = async (alias, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql[alias], values, (err, results) => {
      if (err) {
        console.log(err);
        reject({
          err,
        });
      } else {
        resolve(results);
      }
    });
  });
};

//mysql은 ↓ 얘다
module.exports = {
  query,
};
