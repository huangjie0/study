<template>
  <div>
   <el-container>
      <el-aside width="350px">
        <div class="aside">
          <img class="img" :src="user.avatar">
        </div>
        <div class="nicheng">
          昵称
        </div>
        <div class="personcenter" :class="[index==0?'active':'']" @click="topersoncenter()">
            个人中心
        </div>
        <div class="integral" :class="[index==1?'active':'']" @click="tomall()">
            积分商场
        </div>
        <div class="out" :class="[index==2?'active':'']" @click="tologin()">
            退出
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
  </el-container>
  </div>
</template>

<script>
import {localStorageSet} from '@/common/tool'
import {mapMutations,mapState} from 'vuex'
export default {
    name:'Main',
    data() {
      return {
        index:0
      }
    },
    computed:{
      ...mapState({
         user:(state)=>{
        return state.user.user
      }
      })
    },
    methods: {
      ...mapMutations(['saveUser']),
      topersoncenter(){
        this.index = 0
        this.$router.push('/main/personal')
      },
      topersonal(){
        this.$router.push('/main/personal')
      },
      tologin(){
        this.index = 2
         //当用户退出时，将用户信息清空
        localStorageSet('user',null)
        //将vuex里面数据清空
        this.saveUser({user:null})
        //退出主页面
        this.$router.push('/login')
      },
      tomall(){
        this.index = 1
        this.$router.push('/main/integral')
      }
    },
}
</script>

<style scoped lang='less'>
@color:white;
@line-height:80px;
@width:150px;
.out{
  height: @line-height;
  width: 350px;
  position: absolute;
  top: 470px;
  line-height: @line-height;
  text-align: center;
  color: @color;
  font-size: 18px;
}
.integral{
  height:@line-height;
  width: 350px;
  color: @color;
  position: absolute;
  text-align: center;
  line-height: @line-height;
  top: 390px;
  font-size: 18px;
}
.active{
  background-color: rgb(95, 46, 93);
}
.personcenter{
  position: absolute;
  top: 310px;
  height: @line-height;
  width:350px;
  color: @color;
  font-size: 18px;
  text-align: center;
  line-height: @line-height;

}
.nicheng{
  position: absolute;
  top: 250px;
  color: @color;
  font-size: 20px;
  height: 30px;
  text-align: center;
  width: 350px;
}
/deep/ .el-aside{
  min-height: 845px !important;
  background-color: rgb(63, 63, 63);
}
/deep/ .el-header{
  height: 50px !important;
}
.aside{
  position: absolute;
  top: 70px;
  left: 100px;
  width:@width;
  height: @width;
  border-radius: 50%;
  .img{
    width: @width;
    height: @width;
    border-radius: 50%;
  }
}
</style>