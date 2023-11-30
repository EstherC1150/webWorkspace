<template>
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>오늘 날짜는 : {{ msg }}</p>
    </div>
</template>
<script>
    export default {
        name: 'VueComponent',
        data() {
            return {
                msg: '2023-11-30'
            }
        }
    }
</script>
<style scoped>
    p {
        background-color: #bfbfbf;
    }
</style>
