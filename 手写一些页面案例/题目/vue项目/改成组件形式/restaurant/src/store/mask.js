export default {
    namespaced: true,
    state:{
        isShow:true
    },
    getters:{

    },
    mutations :{
        showLoading(state){
            state.isShow=true
        },
        hideLoading(state){
            state.isShow=false
        }
    },
    actions:{

    }
}