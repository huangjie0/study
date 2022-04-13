//该文件用于创建vuex最为核心的store
//引入vuex
import Vuex from 'vuex'
//引入vue
import Vue from 'vue'
//注册插件
Vue.use(Vuex)
//准备actions用于相应组件中的动作
const actions={
    incrementOdd(context,value){
        if(context.state.sum%2){
            context.commit('jia',value) 
        }
    },
    incrementWait(context,value){
        setTimeout(()=>{
            context.commit('jia',value)
        },500)
    }
}
//准备mutations,用于加工操作数据
const mutations={
    jia(state,value){
       state.sum += value
    },
    jian(state,value){
        state.sum -= value
     },
}
//准备state,存储数据
const state={
    sum:0,
    school:'淮南师范学院',
    subject:'前端'
}
//准备getters用于将state数据进行加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}
//导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})