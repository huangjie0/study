<template>
  <div>
      <ul class="ul">
            <li v-for="(item,index) in arrList" :key="item.id" class="li" @click="change(item.id)"> 
                <input type="checkbox"> <div>{{item.name}}</div> 
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
    data() {
        return {
            
        }
    },
    methods: {
        change(i){
            
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
}


</style>