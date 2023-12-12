const { defineConfig } = require("@vue/cli-service");
const target = "http://localhost:3000";

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      //서버를 혼란시키는 아이
      //"^/api" >> 프록시가 적용되어야 하는 대상에 이름을 붙인다. ^는 앞부분이 /api로 시작하는 모든 통신에 대해서 내가 동작을 하겠다 라는 의미
      "^/api": {
        target,
        changeOrigin: true,
        ws: false,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
});
