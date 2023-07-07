import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: 'home',
        component: () => import("@views/Index.vue"),
        children: [{
            path: '/',
            name: 'index',
            component: () => import('@views/index/Index.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            component: () => import('@views/aboutus/Aboutus.vue'),
            meta: {
                title: '关于我们'
            }
        },
        ]
    },

]

const router = createRouter({
    // createWebHashHistory()是使用hash模式路由
    // createWebHistory()是使用history模式路由
    history: createWebHistory(),
    routes,
});


export default router;
