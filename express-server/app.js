const express = require('express');
const app = express();

const getData = async() => {
    return await fetch('db.json')
    .then(res => res.json());
}

let db = getData();

//라우팅 등록
app.get('/', (req, res)=>{
    res.send('Server Connect');
});

app.get('/posts', (req, res) => {
    res.send(db['posts']);
})

app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});