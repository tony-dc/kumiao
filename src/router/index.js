import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import adminRouter from './admin'
Vue.use(VueRouter)
    //配置页面路由
const routes = [
    movieRouter,
    cinemaRouter,
    mineRouter,
    adminRouter,
    //当url不对时，重定向到movie页面
    {
        path: '/*',
        redirect: '/movie'
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router