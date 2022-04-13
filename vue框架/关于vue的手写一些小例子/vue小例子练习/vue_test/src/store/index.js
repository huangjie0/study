//该文件用于创建vuex最为核心的store
//引入vuex
import Vuex from 'vuex'
//引入vue
import Vue from 'vue'
//注册插件
Vue.use(Vuex)
//准备actions用于相应组件中的动作
const actions={
    jia(context,value){
       context.commit('jia',value)
    },
    jian(context,value){
        context.commit('jian',value)
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
    sum:0
}
//导出store
export default new Vuex.Store({
    actions,
    mutations,
    state
})