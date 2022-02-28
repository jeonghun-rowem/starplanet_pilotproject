import Vue from 'vue';
import VueRouter from 'vue-router';
import MaIn from '@/views/Main';
import NeWs from '@/views/News';
import HeaderView from '@/layout/HeaderView'
// import ServiceCs from '@/views/Service_cs';
// import ServiceFaq from '@/views/Service_faq';

Vue.use(VueRouter);

// 라우트 정보
const route = [ 
    {
        path: "", 
        component: HeaderView,
        child: [
            {path: "", component: MaIn},
            {path: "/news", component: NeWs},
        ]
    },
                
               
];

// Vue 라우터 인스턴스 생성함
const router = new VueRouter({ mode: 'history', routes: route });

export default router;  