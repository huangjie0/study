import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    name:'Login',
    component:()=>import("@/views/login/Login.vue")
  },
  {
    path:'/',
    component:()=>import('@/views/layout/Layout'),
    children:[
      {
        path:'',
        name:'home',
        component:()=>import('@/views/home/Home.vue')
      },
      {
        path:'/qa',
        name:'qa',
        component:()=>import('@/views/qa/Qa.vue')
      },
      {
        path:'/video',
        name:'video',
        component:()=>import('@/views/video/video.vue')
      },
      {
        path:'/my',
        name:'my',
        component:()=>import('@/views/my/My.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
