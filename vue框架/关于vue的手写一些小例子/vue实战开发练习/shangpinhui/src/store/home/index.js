//home模块的仓库
import {reqCategoryList} from '@/api'
const state={
    //初始值根据服务器返回的数据进行书写
    categoryList:[],
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    }
};
const getters={};
const actions={
    //通过api里面的接口函数调用向服务器发请求
    async categoryList({commit}){
        let result = await reqCategoryList()
        console.log('result: ', result);
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}