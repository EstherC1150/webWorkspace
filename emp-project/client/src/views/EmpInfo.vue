<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right">No.</th>
          <td class="text-center">{{ empInfo.emp_no }}</td>
        </tr>
        <tr>
          <th class="text-right">First_name</th>
          <td class="text-center">{{ empInfo.first_name }}</td>
        </tr>
        <tr>
          <th class="text-right">Last_name</th>
          <td class="text-center">{{ empInfo.last_name }}</td>
        </tr>
        <tr>
          <th class="text-right">Gender</th>
          <td class="text-center">{{ empGender }}</td>
        </tr>
        <tr>
          <th class="text-right">HireDate</th>
          <td class="text-center">
            {{ $dateFormat(empInfo.hire_date, "yyyy-MM-dd") }}
          </td>
        </tr>
        <tr>
          <th class="text-right">Salary</th>
          <td class="text-center">${{ empInfo.salary }}</td>
        </tr>
        <tr>
          <th class="text-right">DeptNo</th>
          <td class="text-center">{{ empInfo.dept_no }}</td>
        </tr>
        <tr>
          <th class="text-right">DeptName</th>
          <td class="text-center">{{ empInfo.dept_name }}</td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button @click="goToUpdate(empInfo.emp_no)" class="btn btn-dark">
        수정
      </button>
      <router-link class="btn btn-outline-secondary" to="/empList"
        >목록</router-link
      >
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
  computed: {
    empGender() {
      return this.empInfo.gender == "M" ? "남" : "여";
    },
  },
  created() {
    this.searchNo = this.$route.query.eno;
    this.getEmpInfo();
  },
  methods: {
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emps/${this.searchNo}`)
        .catch((err) => console.log(err));
      this.empInfo = result.data;
    },
    async deleteInfo(eno) {
      let data = {
        param: {
          to_date: "2023-12-07",
        },
      };
      let result = await axios
        .delete(`/api/emps/${eno}`, { data: data })
        .catch((err) => console.log(err));
      let count = result.data.affectedRows;
      if (count == 0) {
        alert("정상적으로 삭제되지 않았습니다.");
      } else {
        alert("정상적으로 삭제되었습니다.");
        this.$router.push({ name: "empList" });
      }
    },
    goToUpdate(no) {
      this.$router.push({ path: "/empForm", query: { eno: no } });
    },
  },
};
</script>
