<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ boardInfo.no }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ getDateFormat(boardInfo.created_date) }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ boardInfo.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="
                  white-space: pre-wrap;
                  border: none;
                  background-color: white;
                "
                >{{ boardInfo.content }}
              </pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info"
                @click="goToUpdateForm(boardInfo.no)"
              >
                수정
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchNo: "",
      boardInfo: {},
    };
  },
  created() {
    //BoardList에서 넘기는 값이
    //this.$router.push({ path: "/info", query: { boardNo: boardNo } });
    //왼쪽 boardNo : 대소문자 가린다...
    //페이지에서 불러오는거 route다 router아님
    this.searchNo = this.$route.query.boardNo;
    this.getBoardInfo();
  },
  methods: {
    async getBoardInfo() {
      //axios는 서버 쪽에 요청한다. 그래서 서버 쪽을 봐야 함
      //Server >> app.js
      //app.get("/boards") ~~ 에서 'get'이 고대로 axios뒤에 온다
      let result = await axios
        .get(`/api/boards/${this.searchNo}`)
        .catch((err) => console.log(err));
      this.boardInfo = result.data;
    },
    getDateFormat(date) {
      return this.$dateFormat(date);
    },
    goToUpdateForm(no) {
      //console.log(no); >> 이렇게하면 이벤트들이 호출
      //페이지가 바뀌는 걸로 axios 안씀
      //라우터에 저장되어있는 path 그대로 들고 오기
      this.$router.push({ path: "/form", query: { boardNo: no } });
    },
  },
};
</script>
