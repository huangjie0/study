<template>
<div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍后为：{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3 style="color:red">下方组件总人数是{{personList.length}}</h3>
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
            n:1,
        }
    },
    computed:{
        ...mapState('countAbout',['sum','subject','school']),
        ...mapState('personAbout',['personList']),
        ...mapGetters('countAbout',['bigSum'])
    },
    methods: {
        ...mapMutations('countAbout',{increment:'jia',decrement:'jian'}),
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    }
}
</script>

<style>
button{
    margin-left: 10px;
}
</style>