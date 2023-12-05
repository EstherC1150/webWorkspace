import { createApp } from "vue";
import App from "./App.vue";
import mixin from "./mixin.js";
import store from "./store.js";

createApp(App)
  .use(store)
  .mixin(mixin)
  .directive("focus", {
    mounted(el, binding, vnode, prevVNode) {
      console.log("mounted", el, binding, vnode, prevVNode);
      if (binding.value) {
        el.focus();
      }
    },
    updated(el, binding, vnode, prevVNode) {
      console.log("updated", el, binding, vnode, prevVNode);
      if (binding.value) {
        el.style.color = "yellowgreen";
      } else {
        el.style.color = "green";
      }
    },
  })
  .mount("#app");
