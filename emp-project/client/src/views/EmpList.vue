<template>
  <div class="contaiver">
    <table class="table">
      <caption>
        Total:
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>EmpNo</th>
          <th>Name</th>
          <!-- <th>FirstName</th>
          <th>LastName</th> -->
          <!-- <th>Gender</th> -->
          <th>HireDate</th>
          <!-- <th>Salary</th> -->
          <!-- <th>DeptNo</th> -->
          <th>DeptName</th>
        </tr>
      </thead>
      <tbody>
        <!-- for -- 반드시 key에 index 아니면 오류남 -->
        <tr
          :key="idx"
          v-for="(emp, idx) in empList"
          @click="goToEmpInfo(emp.emp_no)"
        >
          <td>{{ emp.emp_no }}</td>
          <td>{{ `${emp.first_name}, ${emp.last_name}` }}</td>
          <!-- <td>{{ emp.first_name }}</td>
          <td>{{ emp.last_name }}</td> -->
          <!-- <td>{{ emp.gender }}</td> -->
          <td>{{ $dateFormat(emp.hire_date, "yyyy-MM-dd") }}</td>
          <!-- <td>{{ emp.salary }}</td> -->
          <!-- <td>{{ emp.dept_no }}</td> -->
          <td>{{ emp.dept_name }}</td>
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
      empList: [],
    };
  },
  computed: {
    count() {
      return this.empList.length;
    },
  },
  //created 훅을 기반으로 axios를 실행
  created() {
    this.getEmpList();
  },
  methods: {
    async getEmpList() {
      //http://localhost:8080/api/emps
      let result = await axios.get("/api/emps").catch((err) => {
        console.log(err);
      });
      let list = result.data;
      this.empList = list;
    },
    goToEmpInfo(eno) {
      //내부에서 페이지 전환이니 router쪽으로 정보를 넘겨줘야 한다
      this.$router.push({ path: "/empInfo", query: { eno: eno } });
    },
  },
};
</script>
