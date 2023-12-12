<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <!-- v-model에 연결되는 모든 이름이 db 컬럼명을 사용해서...필드명 기준이 컬럼명으로 사용 -->
      <input type="text" id="no" v-model="boardInfo.no" readonly />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="boardInfo.title" />

      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="boardInfo.writer" />

      <label for="content">내용</label>
      <textarea
        id="content"
        style="height: 200px"
        v-model="boardInfo.content"
      ></textarea>

      <label for="regdate">작성일자</label>
      <input type="text" id="regdate" v-model="boardInfo.created_date" />

      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="isUpdated ? boardUpdate() : boardInsert()"
      >
        저장
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchNo: "",
      boardInfo: {
        no: "",
        title: "",
        writer: "",
        content: "",
        created_date: "",
      },
      //중심이 되는 값을 하나 선언
      isUpdated: false,
    };
  },
  created() {
    this.searchNo = this.$route.query.boardNo;
    if (this.searchNo > 0) {
      //수정이 진행
      //isUpdated : true가 되어야 함
      //날짜, format을 주의하기
      this.getBoardInfo();
      this.isUpdated = true;
    } else {
      //등록이 진행
      this.boardInfo.created_date = this.getToday();
    }
  },
  methods: {
    async getBoardInfo() {
      let result = await axios
        .get(`/api/boards/${this.searchNo}`)
        .catch((err) => console.log(err));
      this.boardInfo = result.data;
      //포멧을 수정하고, 기본값을 덮어쓰기
      this.boardInfo.created_date = this.$dateFormat(
        this.boardInfo.created_date
      );
    },
    getToday() {
      //오늘날짜를 기준으로 작성일자 항목에 출력하는 작업
      //mixin 6번째 줄! 참고
      return this.$dateFormat("");
    },
    //통신을 위한 함수 등록하기 : 사용자가 입력해서 넘기는 걸 기다린다 우리는
    async boardInsert() {
      //우리가 보내는 데이터는 두번째 매개변수로 보내면 된다
      //두번째로 넘어가는 매개변수는 body쪽에 자동으로 뿌려진다
      //obj = body를 말한다
      let obj = {
        param: {
          //boardInfo 그대로 못 꺼낸다 : no때문에
          //우리가 가지고 있는 boardInfo에서 넘겨줘야 함
          title: this.boardInfo.title,
          writer: this.boardInfo.writer,
          content: this.boardInfo.content,
          created_date: this.boardInfo.created_date,
        },
      };
      let result = await axios
        .post("/api/boards", obj)
        .catch((err) => console.log(err));
      //오토인크리먼트가 되어있다고 하면, 후속처리
      //서버에서 자동으로 입력되는 넘버를 받아서...
      if (result.data.insertId > 0) {
        alert("등록되었습니다.");
        this.boardInfo.no = result.data.insertId;
      }
    },
    async boardUpdate() {
      let obj = {
        param: {
          //등록할때 보내는 데이터와 같음
          title: this.boardInfo.title,
          writer: this.boardInfo.writer,
          content: this.boardInfo.content,
          created_date: this.boardInfo.created_date,
        },
      };

      let result = await axios
        .put(`/api/boards/${this.boardInfo.no}`, obj)
        .catch((err) => console.log(err));

      if (result.data.changedRows > 0) {
        alert("수정되었습니다.");
      }
    },
  },
};
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
