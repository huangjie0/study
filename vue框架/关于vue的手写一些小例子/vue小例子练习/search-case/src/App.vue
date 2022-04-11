<template>
  <div>
      <div class="box">
        <div class="box1">
            <Search/>
        </div>
    </div>
    <List/>
</div>
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'
export default {
  name:'App',
  components:{
    Search,
    List
  }
}
</script>

<style scoped>
  *{
      margin: 0;
      padding: 0;
  }
  .box{
      width: 1000px;
      height: 200px;
      background-color: rgb(199, 199, 199);
      margin: 0 auto;
      display: flex;
      align-items: center;
  }
  .box1{
      width: 1000px;
      height: 100px;
  }
</style>