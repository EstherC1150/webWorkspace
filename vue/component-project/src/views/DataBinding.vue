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
        <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{ hobby }}</p>
        </div>
        <hr>
        <img v-bind:style="styleData" v-bind:src="imgUrl">
        <!-- <img v-bind:style="[backSetting, addStyle]" v-bind:src="imgUrl"> -->
        <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">
            Class Binding First
        </div>
        <div class="container" v-bind:class="myClass">
            Class Binding Second
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
                city: ["대구"],
                hobby: '독서',
                imgUrl: 'https://daily.jstor.org/wp-content/uploads/2016/10/Moving_Forest_1050_700.jpg',
                styleData: {
                    backgroundColor: 'yellogreen',
                    width: '400px',
                    border: '3px solid red'
                },
                // backSetting: 'background-color:skyblue; width:200px;',
                // addStyle: 'height: 200px;'
                isActive: false,
                // hasError: !this.isActive //복제하겠따라는 의미
                myClass: 'active'
            }
        },
        computed: { //특정 프로퍼티와 연관된 무언가를 할때
            hasError() {
                return !this.isActive;
            }
        }
    }
</script>
<style scoped>
    .container {
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: #d2d2d2;
        font-weight: bold;
    }
    .text-red {
        color: red;
    }
</style>

