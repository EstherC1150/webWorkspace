const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');
const app = express();

app.use('/user', userRouter);
app.use('/public', express.static('images'));   //images대신에 public/이미지이름
app.use(function (err, req, res, next) {
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.message
    });
});

app.get('/error', (req, res, next) => {
    next(new Error('Process Fail! Check Data!'));
});

const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);

//일종의 select문의 역할을 한다
const getData = (target, where) => { //target : key, where : 배열인 posts, comments 안에 해당하는 아이디값
    let data = jsonData[target];
    if (Array.isArray(data)) { //profile 때문에 이 if절이 있다
        let list = data;
        for (let obj of list) {
            if (obj.id == where) {
                data = obj;
            }
        }
    }
    return data;
}

//라우팅 등록
app.get('/', (req, res) => {
    res.send('Server Connect');
});

//posts 가져오기
app.get('/posts', (req, res) => {
    let data = getData('posts');
    res.json(data);
});

app.get('/posts/:id', (req, res) => { // : 값이 붙어서 넘어온다 단순 경로가 아님
    let data = getData('posts', req.params.id); //body 외에 경로, 쿼리스트링에서 가져올 때에는 params
    res.json(data);
});

//comments 가져오기
app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.json(data);
});

app.get('/comments/:id', (req, res) => {
    let data = getData('comments', req.params.id);
    res.json(data);
})

//profile 가져오기
app.get('/profile', (req, res) => {
    let data = getData('profile');
    res.json(data);
})

//동일한 경로라 하더라도 메소드가 다르면 유니크하다 >> 다르게 인식한다
app.route('/emps')
    .get((req, res) => {
        res.send('사원 전체 조회');
    })
    .post((req, res) => {
        res.send('사원 등록');
    })
    .put((req, res) => {
        res.send('사원 수정');
    })
    .delete((req, res) => {
        res.send('사원 삭제');
    })

app.listen(3000, () => {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});