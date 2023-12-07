//date관련 공통포맷
//반드시 만들고 나서 main.js에 등록하기
export default {
  methods: {
    $dateFormat(value, format) {
      let date = value == "" ? new Date() : new Date(value);
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);

      let result = format
        .replace("yyyy", year)
        .replace("MM", month)
        .replace("dd", day);
      return result;
    },
  },
};
