import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Login from '../views/Login.vue'
import Main from '../views/main.vue'
import TodoList from '../views/TodoList.vue'
import AdvancedTodoList from '../views/AdvancedTodoList.vue'
import Cart from '../views/Cart.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
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
            children:[
                {
                    path:'/',
                    component:Cart
                },
                {
                    path:'cart',
                    component:Cart,
                    name:'cart'
                },
                {
                    path:'todolist',
                    component:TodoList,
                    name:'todolist'
                },
                {
                    path:'advancedtodolist',
                    component:AdvancedTodoList,
                    name:'advancedtodolist'
                }
            ]
        }
    ]
})