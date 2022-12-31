import { createStore } from "vuex"
import {getinfo,login} from '@/api/manager.js'
import { setToken,removeToken } from '@/composables/auth.js'
import { logout } from "../api/manager"
const store = createStore({
    state(){
        return{
            //用户信息
            user:{},
            //侧边宽度
            asideWidth:"250px",
            menus:[],
            ruleNames:[]
        }
    },
    mutations:{
        //记录用户信息
        SET_USERINFO(state,user){
            state.user = user
        },
        //展开或者收起
        handleAsideWidth(state){
            state.asideWidth = state.asideWidth == "250px" ? "64px" : "250px"
        },
        SET_MENUS(state,menus){
            state.menus = menus
        },
        SET_RULENAMES(state,ruleNames){
            state.ruleNames = ruleNames
        }
    },
    actions:{
        //登录方法
        login({ commit },{ username,password }){
            return new Promise((resolve,reject)=>{
                login(username,password).then(res=>{
                    setToken(res.token)
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        //获取当前用户登录信息
        getinfo({ commit }){
            return new Promise((resolve,reject)=>{
                getinfo().then(res=>{
                    commit("SET_USERINFO",res)
                    commit("SET_MENUS",res.menus)
                    commit("SET_RULENAMES",res.ruleNames)
                    resolve(res)
                }).catch(err=>reject(err))
            })
        },
        //退出登录
        logout({commit}){
            removeToken()
            commit("SET_USERINFO",{})

        }
    }
})
export default store