import Vue from "vue";
import  VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Integral from '@/views/Integral.vue'
import Personal from '@/views/Personal.vue'
import Main from '@/components/Main.vue'
Vue.use(VueRouter);
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
            children:[
                {
                    path:'integral',
                    component:Integral,
                    name:'integral'
                },
                {
                    path:'personal',
                    component:Personal,
                    name:'personal'
                }
            ]
        }
    ]
})
export default routers