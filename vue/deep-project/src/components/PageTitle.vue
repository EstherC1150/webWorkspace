<template>
  <h2>{{ title }}</h2>
</template>
<script>
//PageTitle.vue : 자식 컴포넌트
export default {
  props: ["title"], //유효성 검사를 하지 않고 정해진 데이터를 그대로 받겠다는 default
};
</script>
