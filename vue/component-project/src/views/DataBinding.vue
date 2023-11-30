<template>
    <div>
        <h1>{{ title + '!!!' }}</h1>
        <h2 v-bind:name="'sample'" v-text="title" />
        <p v-html="tagList"/>
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel }}</p>
        <input type="number" v-model.lazy="numberModel">
        <p>{{ numberModel + 10000 }}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel"/>
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{ chData }}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <p>{{ city }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'Hello, Vue.js',
                tagList: '<strong>Today is ... </strong>',
                valueModel: 'korea',
                numberModel: '0',
                selectModel: 'winter',
                textModel: '안녕하시오오',
                chData: '',
                city: ''
            }
        }
    }
</script>

