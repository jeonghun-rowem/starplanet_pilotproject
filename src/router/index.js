import Vue from "vue";
import VueRouter from "vue-router";
import MaIn from "@/views/Main.vue";
import NeWs from "@/views/News.vue";
import HeaderView from "@/layout/HeaderView.vue";
import ServiceView from "@/layout/ServiceView.vue";
import ServiceCs from "@/views/Service_cs.vue";
import ServiceFaq from "@/views/Service_faq.vue";

Vue.use(VueRouter);

// 라우트 정보
const route = [
  {
    path: "",
    component: HeaderView,
    children: [
      { path: "", name: "Main", component: MaIn },
      { path: "news", component: NeWs },
      {
        path: "/service",
        component: ServiceView,
        children: [
          { path: "cs", name: "ServiceCs", component: ServiceCs },
          { path: "faq", component: ServiceFaq },
        ],
      },
    ],
  },
];

// Vue 라우터 인스턴스 생성함
const router = new VueRouter({ mode: "history", routes: route });

export default router;
