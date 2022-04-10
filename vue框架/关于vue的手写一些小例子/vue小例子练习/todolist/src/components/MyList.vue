<template>
    <ul>
        <MyItem v-for="item in arrList" :key="item.id" 
        :val='item.val' :id="item.id" 
        :class='{gray:item.checked,fontcolor:item.checked}' />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{MyItem},
    props:['arrList'],
}
</script>

<style scoped>
ul{
    width: 800px;
    height: 30px;
    margin: 0 auto;
}
.hidden{
    display: none;
}
.gray{
    background-color: #9c9c9c;
}
.fontcolor{
    color: white;
}
</style>