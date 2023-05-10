import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginAfterHomePage from '../views/LoginAfterHomePage'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/examHome',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }, {
        path: '/',
        name: 'LoginAfterHomePage',
        component: LoginAfterHomePage,
        redirect: '/userInfo',
        children: [
            {
                path: '/userInfo',
                name: 'userInfo',
                component: () => import('../views/LoginAfterHomePage/UserInfo.vue')
            }, {
                path: '/paper',
                name: 'paper',
                component: () => import('../views/LoginAfterHomePage/Paper.vue')
            }, {
                path: '/scores',
                name: 'scores',
                component: () => import('../views/LoginAfterHomePage/Scores.vue')
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {

    if (to.name === "login") {
        if (localStorage.getItem("token") === null) {
            next()
        } else {
            next({name: 'LoginAfterHomePage'})
        }
        // return {name:"home"};
    }
    if (localStorage.getItem("token") === null) {

        next({name: 'login'})
    }
    next()
})
export default router
