import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/views/Login/Login.vue'
import Main from '@/components/main/Main.vue'
import Restaurant from '@/views/restaurant/Restaurant.vue'

Vue.use(VueRouter)
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
            path:'/main',
            component:Main,
            name:'main',
            redirect:'/main/restaurant',
            children:[
                {
                    path:'restaurant',
                    name:'restaurant',
                    component:Restaurant
                }
            ]
        },
    ]
})
routers.beforeEach((to,from,next)=>{
    if(to.path!=='/login'){
        const users = window.localStorage.getItem('users');
        if(users){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})
export default routers