//导入请求模块
import {reqSearchList} from "@/api"
//search模块的仓库
const state={
    searchlist:{}
};
const mutations={
    GETSEARCHLIST(state,searchlist){
        state.searchlist=searchlist
    }
};
const getters={

};
const actions={
    async getSearchList({commit}){
        let result = await reqSearchList()
        console.log('result: ', result);
        if(result.code==200){
            commit('GETSEARCHLIST',result.data)
        }
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}