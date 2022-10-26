import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import User from '@/components/User.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component:Welcome
      },
      {
        path:'/users',
        component:User
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  //to将要访问的路劲
  if(to.path == '/login') return next()
  const tokenstr = window.sessionStorage.getItem('token')
  if(!tokenstr) return next('/login')
  next();
})

export default router
