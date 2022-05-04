import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // 처음 로딩되는 default 페이지 /news로 이동
            path: '/',
            redirect: '/news'
        },
        {
            // /news로 들어오면 component_NewsView 실행
            path: '/news',
            component: NewsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/jobs',
            component: JobsView
        }
    ]

})