export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('调用了')
            state.personList.unshift(value)
        }
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    }
}