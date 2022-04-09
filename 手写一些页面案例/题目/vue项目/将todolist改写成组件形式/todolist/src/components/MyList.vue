<template>
    <ul>
        <MyItem v-for="item in arrList" :key="item.id" 
        :val='item.val' :id="item.id" :remove='remove'
        :class='{gray:item.checked,fontcolor:item.checked}' :changeColor='changeColor'/>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{MyItem},
    props:['arrList','remove','changeColor'],
}
</script>

<style>
ul{
    width: 800px;
    height: 30px;
    margin: 0 auto;
}
</style>