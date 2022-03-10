import Vue from "vue";
import axios from "axios";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify.js";
import router from "@/router/index.js";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  axios,
  render: (h) => h(App),
}).$mount("#app");
