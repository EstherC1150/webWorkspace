//실제로 db와 연결하는 파일
const mysql = require('mysql');
const sql = require('./db/sql.js'); //sql은 객체이다

const pool = mysql.createPool({ //mysql.env로 암호화
    //키값을 불러온다
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    connectionLimit: process.env.MYSQL_LIMIT
});

//실제로 실행시키기
//mysql은 굳이 mybatis 필요하지 않음

// pool.query('sql문', '값', 콜백함수(err, results) => {
    //기본
// })
pool.query('sql문', '값', (err, results) => {

});

//비동기로
//alias : 필드를 지정
//[alias] 대괄호를 쓰는 이유 : 필드명을 내가 주는대로 넘겨준다는 뜻
//쿼리문에 따라 함수가 있어야 하는데, 지금은 하나만 있다... 이유를 잘 생각하기?
//그 값이 가지는 쿼리문이 밸류로...
//물음표를 해결하려는 values
//물음표 하나에 객체 하나 대응
const query = async (alias, values) => {
    return new Promise((resolve, reject) => {
        return pool.query(sql[alias], values, (err, results) => {
            if (err) {
                console.log(err);
                reject({
                    err
                });
            } else {
                resolve(results);
            }
        })
    })
}

// const getData = async() => {
//     console.log(await query('customerList'));
// };

// getData();

module.exports = {
    query
}