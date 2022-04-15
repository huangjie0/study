<template>
<div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍后为：{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click='incrementWait'>等一等再加</button>
</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            //用户选择的数字
            n:1
        }
    },
    computed:{
        // he(){
        //     return this.$store.state.sum
        // },
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        // xuexiao(){
        //     return this.$store.state.school
        // },
        // xueke(){
        //     return this.$store.state.subject
        // }
        //借助mapstate生成计算属性，从state中读取数据（对象写法）
        //借助mapstate生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        increment(){
            this.$store.commit('jia',this.n)
        },
        decrement(){
            this.$store.commit('jian',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('incrementOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('incrementWait',this.n)
        }
    }
}
</script>

<style>
button{
    margin-left: 10px;
}

</style>