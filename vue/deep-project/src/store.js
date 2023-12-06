// store.js

import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; //추가되는 기능

const store = createStore({
  state() {
    return {
      cart: [
        {
          product_id: 1,
          product_name: "아이폰 거치대",
          category: "A",
        },
      ],
      count: 0,
    };
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
  },
  mutations: {
    //동기식 & state에만 접근할 수 있음
    increment(state) {
      state.count++;
    },
    addProduct(state, info) {
      state.cart.push(info);
    },
  },
  actions: {
    //우리가 정의한 전체가 넘어온다
    //필요하다면 다른 내부의 옵션에도 접근이 가능
    addProduct(context, info) {
      //화면에 뜨는게 조금 딜레이 걸리는 것처럼 느낀다
      setTimeout(() => {
        context.commit("addProduct", info);
      }, 1000);
    },
  },
  plugins: [
    createPersistedState({
      paths: ["cart"],
    }),
  ],
});

export default store;
