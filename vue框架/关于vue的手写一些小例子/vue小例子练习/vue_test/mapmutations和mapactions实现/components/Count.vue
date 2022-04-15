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
    <button @click='increment(n)'>+</button>
    <button @click='decrement(n)'>-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click='incrementWait(n)'>等一等再加</button>
</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            //用户选择的数字
            n:1
        }
    },
    computed:{
        ...mapState(['sum','school','subject']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        // increment(){
        //     this.$store.commit('jia',this.n)
        // },
        // decrement(){
        //     this.$store.commit('jian',this.n)
        // },
        ...mapMutations({increment:'jia',decrement:'jian'}),

        /******************************************/
        // incrementOdd(){
        //     this.$store.dispatch('incrementOdd',this.n)
        // },
        // incrementWait(){
        //     this.$store.dispatch('incrementWait',this.n)
        // },
        // ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
        ...mapActions(['incrementOdd','incrementWait'])
    }
}
</script>

<style>
button{
    margin-left: 10px;
}

</style>