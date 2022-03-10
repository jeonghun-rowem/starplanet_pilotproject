import Vue from "vue";
import axios from "axios";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify.js";
import router from "@/router/index.js";
// 전역scss 설정
import index from "@/static/index.scss";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  axios,
  index,
  render: (h) => h(App),
}).$mount("#app");
