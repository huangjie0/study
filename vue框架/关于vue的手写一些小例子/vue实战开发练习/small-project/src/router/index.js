import Vue from "vue";
import VueRouter from 'vue-router'
//实现路由懒加载
const Integral = () =>import ('@/views/Integral.vue');
const Personal = () =>import ('@/views/Personal.vue');
const Login = () =>import ('@/components/Login.vue');
const Main = () =>import ('@/components/Main.vue');
const Register = () =>import ('@/components/Register.vue');
import {localStorageGet} from '@/common/tool'
Vue.use(VueRouter);
//改写底层代码
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
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
            name:'login',
            meta:{
                requireAuth: false
            }
        },
        {
            path:'/register',
            component:Register,
            name:'register',
            meta:{
                requireAuth: false
            }
        },
        {
            path:'/main',
            component:Main,
            name:'main',
            redirect:'/main/personal',
            children:[
                {
                    path:'integral',
                    component:Integral,
                    name:'integral'
                },
                {
                    path:'personal',
                    component:Personal,
                    name:'personal',
                    meta:{
                        requireAuth: true
                    },
                }
            ]
        }
    ]
})
routers.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        const user = localStorageGet('user');
        if(user){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})
export default routers