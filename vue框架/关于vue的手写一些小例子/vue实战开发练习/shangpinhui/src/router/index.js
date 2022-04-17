//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from '@/pages/Home'
import Search from '@/pages/Search'
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'./search',
            component:Search
        }
    ]
})