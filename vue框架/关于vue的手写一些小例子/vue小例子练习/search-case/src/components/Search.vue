<template>
<div class="box2">
    <div class="box3">Search Github Users</div>
    <div class="box4">
        <input type="text" class="input" placeholder="请输入要搜索的内容呢" v-model="keyWord">
        <button class="btn" @click="searchuser">Search</button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            keyWord:''
        }
    },
    methods: {
        searchuser(){
            //请求前更新list数据
            this.$bus.$emit('updateListDate',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
                res=>{
                    this.$bus.$emit('updateListDate',{isLoading:false,errMsg:'',users:res.data.items})
                },
                err=>{
                    this.$bus.$emit('updateListDate',{isLoading:false,errMsg:err.message,users:[]})
                } 
            )
        }
    },
}
</script>

<style scoped>
 .box2{
      width: 300px;
      height: 100px;
      margin-left: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .box3{
      width: 300px;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      font-weight: bold;
  }
  .box4{
      width: 300px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .input{
      width: 240px;
      height: 25px;
      border: 0;
      outline: none;
  }
  .btn{
      width: 50px;
      height: 25px;
      border: 0;
      color: rgb(151, 151, 151);
  }
</style>