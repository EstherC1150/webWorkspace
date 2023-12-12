import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import BoardList from "../views/BoardList.vue";
import BoardInfo from "../views/BoardInfo.vue";
import BoardForm from "../views/BoardForm.vue";

//라우터는 뷰 안에서 가리키는 경로이다
const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/list",
    name: "boardList",
    component: BoardList,
  },
  {
    path: "/info",
    name: "boardInfo",
    component: BoardInfo,
  },
  {
    path: "/form",
    name: "boardForm",
    component: BoardForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
