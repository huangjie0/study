import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from "@/pages/index.vue"
import Login from "@/pages/login.vue"
import NotFound from "@/pages/404.vue"
import GoodList from "@/pages/goods/list.vue"
import CategoryList from "@/pages/category/list.vue"
import Admin from "@/layouts/admin.vue"
import UserList from "@/pages/user/list.vue"
import OrderList from "@/pages/order/list.vue"
import CommentList from "@/pages/comment/list.vue"
import ImageList from "@/pages/image/list.vue"
import NoticeList from "@/pages/notice/list.vue"
import SettingBase from "@/pages/setting/base.vue"
import CouponList from "@/pages/coupon/list.vue"
const routes = [{
        path: '/',
        name: "admin",
        component: Admin,
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录页面'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]
//动态路由，用于匹配菜单动态路由
const asyncRouter = [{
        path: '/',
        component: Index,
        name:'/',
        meta: {
            title: '后台首页'
        }
    },
    {
        path: '/goods/list',
        component: GoodList,
        name:'/goods/list',
        meta: {
            title: '商品管理'
        }
    },
    {
        path: '/category/list',
        component: CategoryList,
        name:'/category/list',
        meta: {
            title: '分类列表'
        }
    },
    {
        path: '/user/list',
        component: UserList,
        name:'/user/list',
        meta: {
            title: '用户列表'
        }
    },
    {
        path: '/order/list',
        component: OrderList,
        name:'/order/list',
        meta: {
            title: '订单列表'
        }
    },
    {
        path: '/comment/list',
        component: CommentList,
        name:'/comment/list',
        meta: {
            title: '评价列表'
        }
    },
    {
        path: '/image/list',
        component: ImageList,
        name:'/image/list',
        meta: {
            title: '图库列表'
        }
    },
    {
        path: '/notice/list',
        component: NoticeList,
        name:'/notice/list',
        meta: {
            title: '公告列表'
        }
    },
    {
        path: '/setting/base',
        component: SettingBase,
        name:'/setting/base',
        meta: {
            title: '配置列表'
        }
    },
    {
        path: '/coupon/list',
        component: CouponList,
        name:'/coupon/list',
        meta: {
            title: '优惠券列表'
        }
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//动态添加路由方法
export function addRoutes(menus){
    //是否有新的路由
    let hasNewRoutes = false
    const findAndAddRouteByMenus = (arr)=>{
        arr.forEach(e => {
            let item = asyncRouter.find(o=>o.path == e.frontpath)
            if(item && !router.hasRoute(item.path)){
                router.addRoute("admin",item)
                hasNewRoutes = true
            }
            if(e.child && e.child.length > 0){
                findAndAddRouteByMenus(e.child)
            }
        });
    }
    findAndAddRouteByMenus(menus)
    return hasNewRoutes
}