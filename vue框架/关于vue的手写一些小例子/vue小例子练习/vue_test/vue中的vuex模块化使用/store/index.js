//该文件用于创建vuex最为核心的store
//引入vuex
import Vuex from 'vuex'
//引入vue
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'
//注册插件
Vue.use(Vuex)
//导出store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})