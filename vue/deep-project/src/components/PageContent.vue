<template>
  <table>
    <tr>
      {{
        $dateFormat("2023/12/05", "yyyy-MM-dd")
      }}
    </tr>
    <tr>
      <th>제목</th>
      <td>{{ title }}</td>
      <th>조회수</th>
      <td>{{ readInfo }}</td>
    </tr>
    <tr>
      <th>작성자</th>
      <td>{{ writer }}</td>
      <th>작성일자</th>
      <td>{{ regdate }}</td>
    </tr>
    <tr>
      <th>내용</th>
      <td>{{ content }}</td>
    </tr>
    <tr>
      <button @click="updateInfo">업데이트</button>
    </tr>
  </table>
</template>
<script>
// import AppMixin from "../mixin.js";
export default {
  //props: ["title", "count", "writer", "regdate", "content"],
  //유효성 검사 할 시 ↓ : 객체로 들어가야 함
  // mixins: [AppMixin],
  props: {
    title: String,
    count: {
      type: Number,
      default: 0,
    },
    writer: {
      type: [String, Object], //타입이 두가지가 허용될 경우 배열로
      default: function () {
        //함수형태, 리턴되는 대상이 객체 & 만약 배열이라면 배열로
        return { first: "Adward", second: "Ian" };
      },
    },
    regdate: {
      required: true,
      validator: function (value) {
        // yyyy-MM-dd
        let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/;
        return !(value.match(format) == null);
      },
    },
    content: String,
  },
  computed: {
    readInfo() {
      return this.count + 1;
    },
  },
  methods: {
    updateInfo() {
      //이벤트 전달
      this.$emit("update-info", this.readInfo);
    },
  },
  watch: {
    readInfo() {
      //데이터 전달
      this.$emit("update-info", this.readInfo);
    },
  },
};
</script>
