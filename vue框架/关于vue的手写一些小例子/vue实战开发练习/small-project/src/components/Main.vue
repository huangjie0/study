<template>
  <div>
   <el-container>
      <el-aside width="350px">
        <div class="aside">
          <img class="img" src="@/assets/user.png">
        </div>
        <div class="nicheng">
          昵称
        </div>
        <div class="personcenter" @click="topersoncenter()">
            个人中心
        </div>
        <div class="integral" @click="tomall()">
            积分商场
        </div>
        <div class="out" @click="tologin()">
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
export default {
    name:'Main',
    methods: {
      topersoncenter(){
        this.$router.push('/main/personal')
      },
      topersonal(){
        this.$router.push('/main/personal')
      },
      tologin(){
        this.$router.push('/login')
      },
      tomall(){
        this.$router.push('/main/integral')
      }
    },

}
</script>

<style scoped lang='less'>
.out{
  height: 80px;
  width: 350px;
  position: absolute;
  top: 470px;
  line-height: 80px;
  text-align: center;
  color: white;
  font-size: 18px;
}
.integral{
  height: 80px;
  width: 350px;
  color: white;
  position: absolute;
  text-align: center;
  line-height: 80px;
  top: 390px;
  font-size: 18px;
}
.personcenter{
  position: absolute;
  top: 310px;
  height: 80px;
  width:350px;
  color: white;
  font-size: 18px;
  text-align: center;
  line-height:  80px;
  background-color: rgb(95, 46, 93);
}
.nicheng{
  position: absolute;
  top: 250px;
  color: white;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  .img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
}
</style>