<template>
  <div>
    <ul class="ul">
        <li v-for="(item,index) in arrList" :key="item.id" class="li">
            <div>{{!checked[index].status ? checked[index].name:''}}</div> 
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Unfinished',
    props:{
        arrList:Array,
        required:true
    },
    computed:{
        checked(){
            return this.arrList
        }
    }
}
</script>

<style scoped>
.ul{
    width: 800px;
    min-height: 500px; 
    list-style: none;
}
.li{
    display: flex;
    justify-content:space-between;
    align-items: center;
    color: rgb(133, 133, 133);
}
</style>