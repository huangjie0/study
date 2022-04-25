//home模块的仓库
import {reqCategoryList, reqGetbannerList,reqGetfloorList} from '@/api'
const state={
    //初始值根据服务器返回的数据进行书写
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
};
const getters={};
const actions={
    //通过api里面的接口函数调用向服务器发请求
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图数据
    async getBannerList({commit}){
        let result = await reqGetbannerList()
        if(result.code==200){
            commit('GETBANNERLIST',result.data)
        }
    },
    //获取floor数据
    async getGetfloorList({commit}){
        let result = await reqGetfloorList()
        if(result.code==200){
            commit('GETFLOORLIST',result.data)
        }
    }
};
export default {
    state,
    mutations,
    getters,
    actions
}