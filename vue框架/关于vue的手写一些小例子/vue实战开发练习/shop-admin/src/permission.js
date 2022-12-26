import router from '@/router'
import { getToken } from "@/composables/auth.js"
import { toast } from "@/composables/util.js"
//全局前置守卫
router.beforeEach((to, from, next) => {
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
    next()
    console.log('全局守卫')
})