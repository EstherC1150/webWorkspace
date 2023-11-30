//전체조회
fetch('http://localhost:3000/posts')
.then(res => res.json())
.then(data => console.log('list', data))
.catch(err => console.log(err));

//단건조회
// '/'를 기준으로 조회할 대상 넘겨주기
fetch('http://localhost:3000/posts/1') 
.then(res => res.json())
.then(data => console.log('info', data))
.catch(err => console.log(err));

//등록
// fetch('http://localhost:3000/posts', {
//     method : 'post',
//     headers : {
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({ userId : 2,
//                             id : 4,
//                             title : 'Have a Nice Day!',
//                             body : 'quia et suscipit\n' +
//                                     'suscipit recusandae consequuntur expedita et cum\n' +      
//                                     'reprehenderit molestiae ut ut quas totam\n' +
//                                     'nostrum rerum est autem sunt rem eveniet architecto'
//     })
// })
// .then(res => res.json())
// .then(result => console.log('insert', result));

//수정 (단건조회와 등록이 결합)
fetch('http://localhost:3000/posts/4', {
    method : 'put',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify({ userId : 3,
                            title : 'Hello, World!',
                            body : 'quia et suscipit\n' +
                                    'suscipit recusandae consequuntur expedita et cum\n' +      
                                    'reprehenderit molestiae ut ut quas totam\n' +
                                    'nostrum rerum est autem sunt rem eveniet architecto'
    })
})
.then(res => res.json())
.then(result => console.log('update', result));

//삭제
fetch('http://localhost:3000/posts/4', {
    method : 'delete'
})
.then(res => res.json())
.then(result => console.log('delete', result));