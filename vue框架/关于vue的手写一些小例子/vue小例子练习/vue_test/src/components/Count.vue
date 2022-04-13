<template>
<div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h3>当前求和放大10倍后为：{{$store.getters.bigSum}}</h3>
    <h3>我在{{$store.state.school}},学习{{$store.state.subject}}</h3>
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
export default {
    name:'Count',
    data() {
        return {
            //用户选择的数字
            n:1
        }
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
    },
}
</script>

<style>
button{
    margin-left: 10px;
}

</style>