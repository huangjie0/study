import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from '../views/TodoList.vue'
import Unfinished from '../views/Unfinished.vue'
import Finished from '../views/Finished.vue'
import All from '../views/All.vue'
import Login from '../views/Login.vue'
import Page_404 from '../views/Page_404.vue'
Vue.use(VueRouter);

//重写底层代码
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
return originalPush.call(this, location).catch(err => err)
}

const routers = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path:'/login',
            component:Login,
            name:'login'
        },
        {
            path:'/todolist',
            name:'todolist',
            component:TodoList,
            children:[
                { 
                    path:'unfinished',
                    component:Unfinished,
                    name:'unfinished'
                },
                {
                    path:'finished',
                    component:Finished,
                    name:'finished'
                },
                {
                    path:'all',
                    component:All,
                    name:'all'
                }
            ]
        },
        {
            path:'/*',
            component:Page_404,
            name:'page_404'
        }
    ]
})
//路由前置守卫
routers.beforeEach((to,from,next)=>{
    if(to.path!=='/login'){
        const user = window.localStorage.getItem('user');
        if(user){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})
//暴露函数
export default routers