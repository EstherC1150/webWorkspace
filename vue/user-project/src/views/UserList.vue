<template>
  <div class="container">
    <table class="table table-primary">
      <caption>
        Total:
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="idx"
          v-for="(user, idx) in userList"
          @click="goToUserInfo(user.user_id)"
        >
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.user_gender }}</td>
          <td>{{ dataFormat(user.join_date, "yyyy년 MM월 dd일") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userList: [], //될수있으면 어떤 타입인지,초기화 시킬 때 그 타입을 알려주면 좋다
    };
  },
  computed: {
    count() {
      return this.userList.length;
    },
  },
  created() {
    //컴포넌트가 초기화할 데이터관련 진행
    this.getUserList();
  },
  methods: {
    async getUserList() {
      let result = await axios.get("/api/users").catch((err) => {
        //http://localhost:3000/api/users
        console.log(err);
      });
      let list = result.data;
      this.userList = list;
    },
    goToUserInfo(id) {
      //페이지 안에서 또 다른 페이지를 : $router
      this.$router.push({ path: "/userInfo", query: { userId: id } });
      //name: route로 등록할 때 사용한 name 속성
      //params: path 속성이 '/target/:id' 일때 {'id': 100}
    },
    dataFormat(value, format) {
      //yyyy년 MM월 dd일
      //date클래스 생각하기
      let date = new Date(value);
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);

      //1번째 방식: (value, format)
      let result = format
        .replace("yyyy", year)
        .replace("MM", month)
        .replace("dd", day);
      return result;

      //2번째 방식: (value)
      // return `${year}년${month}월${day}일`;
    },
  },
};
</script>
