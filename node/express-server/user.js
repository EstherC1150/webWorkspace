const express = require('express');
const router = express.Router();

//라우터를 등록하고
router.get('/', (req, res) => {
    res.send('회원 정보 조회');
});

router.post('/insert', (req, res) => {
    res.send('회원 등록');
});

router.put('/update', (req, res) => {
    res.send('회원 정보 수정');
});

router.delete('/delete', (req, res) => {
    res.send('회원 삭제');
});


 //router자체가 객체라서 바로 exports에 대입하면 된다
module.exports = router;