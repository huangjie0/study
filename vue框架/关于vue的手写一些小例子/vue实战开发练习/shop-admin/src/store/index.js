import { createStore } from "vuex"
const store = createStore({
    state(){
        return{
            //用户信息
            user:{}
        }
    },
    mutations:{
        //记录用户信息
        SET_USERINFO(state,user){
            state.user = user
        }
    }
})
export default store