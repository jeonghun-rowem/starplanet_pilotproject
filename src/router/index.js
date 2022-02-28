import Vue from 'vue';
import VueRouter from 'vue-router';
import MaIn from '@/views/Main';

Vue.use(VueRouter);

// 라우트 정보
const route = [ {path: "", component: MaIn},
               
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({ mode: 'history', routes: route });

export default router;