export default {
    namespaced: true,
    state:{
        isErr:true
    },
    getters:{

    },
    mutations :{
        showErring(state){
            state.isErr=true
        },
        hideErring(state){
            state.isErr=false
        }
    },
    actions:{

    }
}