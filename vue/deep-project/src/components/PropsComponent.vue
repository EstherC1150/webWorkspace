<template>
  <div>
    <!-- <page-title /> -->
    <PageTitle title="Hello, world!!!" />
    <!-- 개별로 넘기는... -->
    <!-- <PageContent
      :title="header"
      v-bind:count="10"
      :writer="['Adward']"
      :regdate="'2023-12-05'"
      :content="{ first: 'Node.js', second: 'Vue.js' }"
    /> -->

    <!-- 한꺼번에 넘기는... -->
    <!-- info는 객체타입, info가 가지는 필드명이 PageContent.vue에 props에 있어야 함 -->
    <PageContent v-bind="info" @update-info="handler" />
    <RefCom ref="child" />
    <button @click="childHandler">자식 제어</button>
  </div>
</template>
<script>
//PropsComponent.vue 부모컴포넌트
import PageTitle from "./PageTitle.vue";
import PageContent from "./PageContent.vue";
import RefCom from "./RefComponent.vue";

export default {
  data() {
    return {
      header: "",
      info: {
        title: "태굥이하잇",
        // count: 10,
        writer: "다예언니",
        regdate: "2023-12-05",
        content: "귀여운 태굥이 하아아잉 바아아잉",
      },
    };
  },
  components: {
    PageTitle,
    PageContent,
    RefCom,
  },
  methods: {
    handler(value) {
      alert(value);
    },
    childHandler() {
      //   this.$refs.child.content = 100;
      //   this.$refs.child.content = "부모가 보내는 데이터";
      //   this.$refs.child.plusCount();
      this.$refs.child.$refs.cBtn.click();
    },
  },
};
</script>
