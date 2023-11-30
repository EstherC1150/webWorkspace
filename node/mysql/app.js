//dotenv는 변수를 사용하지 않는다
require('dotenv').config({
    path: './db/mysql.env'
});
const express = require('express');
const app = express();
const mysql = require('./db.js');


app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log('Server Start');
});

app.get('/customers', async (req, res) => {
    let list = await mysql.query('customerList');
    res.send(list);
});

app.get('/customers/:id', async (req, res) => {
    let data = req.params.id; //경로에 붙었기때문에 body로 넘어오지 않음
    let list = await mysql.query('customerInfo', data);
    res.send(list[0]); //select는 한건이든 여러건이든 배열로 돌아오는데, 단건조회했는데 배열로 넘어오면 문제 될 수 있음 : 제한 걸기
})

app.post('/customers', async (req, res) => {
    let data = req.body.param;
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});

app.put('/customers/:id', async (req, res) => {
    //body , pramas
    let datas = [req.body.param, req.params.id]; //물음표별로 데이터가 하나 필요해서 배열로
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
});
app.delete('/customers/:id', async (req, res) => {
    let data = req.params.id; //body도 객체도 필요 없음, 배열이 아닌건 하나밖에 없으니까 : where절로 id를 미리 정의해서 객체도 필요 없음
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});