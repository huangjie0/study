import Vue from "vue";
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Integral from '@/views/Integral.vue'
import Personal from '@/views/Personal.vue'
import Main from '@/components/Main.vue'
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
            name:'login'
        },
        {
            path:'/register',
            component:Register,
            name:'register'
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
                }
            ]
        }
    ]
})
export default routers