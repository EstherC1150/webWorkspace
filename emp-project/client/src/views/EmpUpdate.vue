<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right">No.</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.emp_no" />
          </td>
        </tr>
        <tr>
          <th class="text-right">First_name</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.first_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right">Last_name</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.last_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right">Gender</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="empInfo.emp_gender" />남자
            <input type="radio" value="F" v-model="empInfo.emp_gender" />여자
          </td>
        </tr>
        <tr>
          <th class="text-right">HireDate</th>
          <td class="text-center">
            <input type="date" v-model="empInfo.hire_date" />
          </td>
        </tr>
        <tr>
          <th class="text-right">Salary</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.salary" />
          </td>
        </tr>
        <tr>
          <th class="text-right">DeptNo</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.dept_no" />
          </td>
        </tr>
        <tr>
          <th class="text-right">DeptName</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.dept_name" />
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button
        @click="goToUpdate(empInfo.emp_no)"
        class="btn btn-secondary"
        to="/empUpdate"
      >
        저장
      </button>
      <router-link class="btn btn-dark" to="/empList">목록</router-link>
      <button @click="deleteInfo(empInfo.emp_no)" class="btn btn-warning">
        삭제
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchNo: "",
      empInfo: {},
    };
  },
  created() {
    this.searchNo = this.$route.query.userId;
    this.getEmpInfo();
  },
  methods: {
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emps/${this.searchNo}`)
        .catch((err) => console.log(err));
      this.empInfo = result.data;
      let newDate = this.$dateFormat(this.empInfo.hire_date, "yyyy-MM-dd");
      this.empInfo.hire_date = newDate;
    },
    async updateInfo() {
      let data = {
        param: this.empInfo,
      };
      let result = await axios
        .put(`/api/emps/${this.empInfo.emp_no}, data`)
        .catch((err) => console.log(err));
      console.log(result.data);
      if (result.data.changeRows == 0) {
        alert(
          `수정되지 않았습니다. \n메세지를 확인해주세요.\n${result.data.message}`
        );
      } else {
        alert("정상적으로 수정되었습니다.");
      }
    },
  },
};
</script>
