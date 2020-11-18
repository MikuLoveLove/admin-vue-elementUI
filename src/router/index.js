import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)


const router = new Router({
    routes,
    mode: 'history'
})

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next({name: 'home'})
    } else next()
})

export default router