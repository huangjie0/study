//改文件用于创建路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Index from '../pages/Index.vue'
import Detail from '../pages/Details.vue'

//创建一个路由器
export default  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'index',
                    component:Index,
                    children:[
                        {
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})