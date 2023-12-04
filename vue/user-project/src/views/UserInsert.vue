<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">ID</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_id" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">Password</th>
          <td class="text-center">
            <input type="password" v-model="userInfo.user_pwd" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="userInfo.user_gender" />남자
            <input type="radio" value="F" v-model="userInfo.user_gender" />여자
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">나이</th>
          <td class="text-center">
            <input type="number" v-model="userInfo.user_age" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">가입일자</th>
          <td class="text-center">
            <input type="date" v-model="userInfo.join_date" />
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-dark" @click="insertInfo">저장</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        user_id: "",
        user_pwd: "",
        user_name: null,
        user_gender: null,
        user_age: 0,
        join_date: null,
      },
    };
  },
  created() {
    this.userInfo.join_date = this.getToday();
  },
  methods: {
    async insertInfo() {
      if (!this.validation()) return;

      let data = {
        param: this.userInfo,
      };
      let result = await axios
        // 둘 다 같은거지만 명시를 하느냐 내부적으로 지원된 기능을 쓰느냐... 차이
        // 어떤 메소드를 아직 쓰는지 잘 모르겠다면... JSON을 다루는게 익숙치 않으면... 밑 방식으로 쓰는 것도...
        // 76-79라인은 무조건 외우는것
        // let result = await axios('/api/users', { //중괄호로 할 시에는 axios로...
        // method: 'post',
        // headers : {
        //     'content-type' : 'application/json'
        // },
        // data : JSON.stringify(data)
        // })
        // .catch((err) => console.log(err));
        .post(`/api/users`, data)
        .catch((err) => console.log(err));

      console.log(result.data);
      if (result.data.insertId == 0) {
        alert(
          `등록되지 않았습니다. \n메세지를 확인해주세요.\n${result.data.message}`
        );
      } else {
        alert(`정상적으로 등록되었습니다.\nNo.${result.data.insertId}`);
        this.$router.push({ name: "userList" });
      }
    },
    getToday() {
      let today = new Date();
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    },
    validation() {
      if (this.userInfo.user_id == "") {
        alert("아이디가 입력되지 않았습니다.");
        return false;
      }
      if (this.userInfo.user_pwd == "") {
        alert("비밀번호가 입력되지 않았습니다.");
        return false;
      }

      return true;
    },
  },
};
</script>
