export default {
    namespaced: true,
    state:{
        headerShow:true
    },
    getters:{

    },
    mutations :{
        headerShowing(state){
            state.headerShow=true
        },
        headerhiding (state){
            state.headerShow=false
        }
    },
    actions:{

    }
}