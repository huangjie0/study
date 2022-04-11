<template>
<div class="list">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="list1" v-for="user in info.users" :key="user.login">
        <div class="list2">
            <a :href="user.html_url">
                <img :src="user.avatar_url" alt="">
            </a>
        </div>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show='info.isLoading'>加载中....</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
</div>
</template>

<script>
export default {
    name:'List',
    data() {
        return {
            info:{
            isFirst:true,
            isLoading:false,
            errMsg:'',
            users:[]
            }
        }
    },
    mounted() {
        this.$bus.$on('updateListDate',(dataObj)=>{
           this.info={...this.info,...dataObj}
        })
    },
}
</script>

<style scoped>
 .list{
      width: 1000px;
      min-height: 310px;
      margin: 0 auto;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
  }
  .list1{
      width: 325px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgb(192, 192, 192);
  }
  .list2{
      width: 200px;
      height: 150px;
  }
    img{
        width: 200px;
        height: 150px;
    }

</style>