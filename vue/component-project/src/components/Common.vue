<template>
    <div></div>
</template>
<script>

export default {
    components: [],
    data() {
        return {
            today: new Date()
        }
    },
    computed: {
        AfterYear() {
            return this.today.setFullYear(this.today.getFullYear() + 1);
        }
    },

    methods: {},
    watch: {},
    created() {},
    mounted() {} 
}

</script>
<style>

</style>
