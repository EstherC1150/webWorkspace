<template>
    <div>
        <button v-on:click="addData">+</button>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="idx" v-for="(product, idx) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    let data = [
        {
            "product_name": "기계식키보드",
            "price": 25000,
            "category": "노트북/태블릿",
            "delivery_price": 5000
        },
        {
            "product_name": "무선마우스",
            "price": 12000,
            "category": "노트북/태블릿",
            "delivery_price": 5000
        },
        {
            "product_name": "아이패드",
            "price": 725000,
            "category": "노트북/태블릿",
            "delivery_price": 5000
        },
        {
            "product_name": "태블릿거치대",
            "price": 32000,
            "category": "노트북/태블릿",
            "delivery_price": 5000
        },
        {
            "product_name": "무선충전기",
            "price": 28000,
            "category": "노트북/태블릿",
            "delivery_price": 5000
        }
    ]

    export default {
        data() {
            return {
                productList: data
            }
        },
        methods: {
            addData() {
                let obj = {
                    "product_name": "무선충전기",
                    "price": 28000,
                    "category": "노트북/태블릿",
                    "delivery_price": 5000
                };
                let index = this.productList.length;
                this.productList[index] = obj;
            }
            // addData: function(){}
        }
    }
</script>
