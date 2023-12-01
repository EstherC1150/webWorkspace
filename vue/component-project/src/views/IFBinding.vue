<template>
  <div>
    <input type="number" v-model="grade" />
    <p v-if="grade >= 90">성적 : A</p>
    <p v-else-if="grade >= 80">성적 : B</p>
    <p v-else-if="grade >= 70">성적 : C</p>
    <!-- <p>--------------------------------</p>  중간에 태그 들어가면 안됨! 에러 -->
    <p v-else>성적 : D</p>
    <hr />
    <input type="checkbox" v-model="chData" />선택
    <p v-show="chData">Hello, World!</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      grade: "",
      chData: "",
    };
  },
};
</script>
