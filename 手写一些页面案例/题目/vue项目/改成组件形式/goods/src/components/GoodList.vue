<template>
<li>
    <div class="box2">{{item.name}}</div>
    <slot></slot>
    <div class="box3">
        <div class="box4">￥:{{item.price}}</div>
        <div class="box5">
            <button @click="reduce(index)" :disabled="item.count===1">-</button>
            <div>{{item.count}}</div>
            <button @click='add(index)' :disabled="item.count===4">+</button>
        </div>
    </div>
</li>
</template>

<script>
export default {
    name:'GoodList',
    props:['item','index'],
    methods: {
        reduce(){
            this.$emit('reduce',this.index)
        },
        add(){
            this.$emit('add',this.index)
        }
    },
}
</script>

<style scoped>
 .box3{
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center
  }
  .box4{
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
  }
  .box5{
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 20px;
      background-color: rgb(51, 51, 51);
      color: white;
  }
  .box2{
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
  }
   button{
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 20px;
  }
</style>