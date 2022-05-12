import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from '../views/TodoList.vue'
import Unfinished from '../views/Unfinished.vue'
import Finished from '../views/Finished.vue'
import All from '../views/All.vue'
Vue.use(VueRouter);

//重写底层代码
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:TodoList
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
        }
    ]
})