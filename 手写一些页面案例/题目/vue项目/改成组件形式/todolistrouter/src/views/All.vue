<template>
  <div>
      <ul class="ul">
        <li v-for="(item) in arrList" :key="item.id" class="li" 
        @click="change(item)" :class="[item.status ? 'active': '']"> 
            <input type="checkbox" :checked='item.status'><div>{{item.name}}</div> 
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'All',
    props:{
        arrList:Array,
        required:true
    },
    methods: {
        change(item){
            item.status = !item.status
        }
    },
}
</script>

<style scoped>
.active{
    background-color: rgb(196, 196, 196);
}
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