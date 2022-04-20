import Vue from "vue";
import vuex from "vuex"
Vue.use(vuex)
//state仓库存储数据的地方
//引入小仓库
import home from './home/index'
import search from "./search";
export default new vuex.Store({
    modules:{
        home,
        search
    }
})