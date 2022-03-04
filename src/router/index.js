import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 라우트 정보
// Lazy Loading Routes
const route = [
  {
    path: "",
    component: () => import("@/layout/HeaderView.vue"),
    children: [
      { path: "", name: "Main", component: () => import("@/views/Main.vue") },
      {
        path: "news",
        name: "News",
        component: () => import("@/views/News.vue"),
      },
      {
        path: "/service",
        component: () => import("@/layout/ServiceView.vue"),
        children: [
          {
            path: "cs",
            name: "ServiceCs",
            component: () => import("@/views/Service_cs.vue"),
          },
          {
            path: "faq",
            name: "ServiceFaq",
            component: () => import("@/views/Service_faq.vue"),
          },
        ],
      },
    ],
  },
];

// Vue 라우터 인스턴스 생성함
const router = new VueRouter({ mode: "history", routes: route });

export default router;
