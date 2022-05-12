<template>
  <div class="main">
    <div class="main1">
      <div class="cart" :class="[index == 0 ? 'active' :'']" @click="cart">cart</div>
      <div class="todolist" :class="[index == 1 ? 'active' :'']" @click="todolist">todolist</div>
      <div class="AdvancedTodolist" :class="[index == 2 ? 'active' :'']" @click="advancedtodolist">AdvancedTodolist</div>
    </div>
    <div class="main2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index:0
    }
  },
  name:'Main',
  methods: {
    cart(){
      this.index=0;
      this.$router.push('/main/cart');
    },
    todolist(){
      this.index=1
      this.$router.push('/main/todolist');
    },
    advancedtodolist(){
      this.index=2
      this.$router.push('/main/advancedtodolist');
    }
  },
}
</script>

<style scoped>
.active{
  background-color: chartreuse;
}
.main{
  display: flex;
}
.main1{
  width: 200px;
  height: 100vh;
  background-color: blueviolet;
}
.main2{
  flex: 1;
  background-color: aquamarine;
}
.cart{
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.todolist{
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.AdvancedTodolist{
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>