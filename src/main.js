import Vue from "vue";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify.js";
import router from "@/router/index.js";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
