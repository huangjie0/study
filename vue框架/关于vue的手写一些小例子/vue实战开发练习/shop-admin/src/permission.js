import { router,addRoutes } from '@/router'
import { getToken } from "@/composables/auth.js"
import { toast,showFullLoading,hideFullLoading } from "@/composables/util.js"
import store from './store'
//全局前置守卫
let hasGetInfo = false
router.beforeEach(async (to, from, next) => {
    showFullLoading()
    const token = getToken()
    //没有登录，强制跳转到登录页面
    if(!token && to.path !== '/login'){
        toast("请先登录","error")
        return next({path:'/login'})
    }
    //防止重复登录判断
    if(token && to.path == "/login"){
        toast("请勿重复登录！")
        return next({path:from.path ? from.path : "/"})
    }
    //如果用户登陆了，自动获取用户信息，存储在vuex中
    let hasNewRoutes = false
    if(token && !hasGetInfo){
        let { menus } = await store.dispatch("getinfo")
        hasGetInfo = true
        //动态添加路由
        hasNewRoutes = addRoutes(menus)
    }
    //设置页面标题
    let title = (to.meta.title ? to.meta.title : "") + "-帝沙编程商城后台"
    document.title = title
    hasNewRoutes ? next(to.fullPath) : next()
})
//全局后置钩子
router.afterEach((to,from)=>hideFullLoading())