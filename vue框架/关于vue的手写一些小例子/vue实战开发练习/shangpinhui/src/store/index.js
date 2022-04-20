import Vue from "vue";
import vuex from "vuex"
Vue.use(vuex)
//state仓库存储数据的地方
const state = {};
const mutations={};
const actions={};
const getters={};
export default new vuex.Store({
    state,
    mutations,
    getters,
    actions
})