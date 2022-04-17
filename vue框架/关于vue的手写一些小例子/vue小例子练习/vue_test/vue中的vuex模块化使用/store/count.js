export default {
    namespaced: true,
    actions:{
        jiaOdd(context,value){
            if(context.state.sum%2){
                context.commit('jia',value) 
            }
        },
        jiaWait(context,value){
            setTimeout(()=>{
                context.commit('jia',value)
            },500)
        }
    },
    mutations:{
        jia(state,value){
            state.sum += value
         },
         jian(state,value){
             state.sum -= value
          },
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
    state:{
        sum:0,
        school:'淮南师范学院',
        subject:'前端',
    }
}