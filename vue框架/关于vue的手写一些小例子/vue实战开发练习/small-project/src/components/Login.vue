<template>
  <div class="login">
    <div class="login_left">
      <img src="@/assets/img.jpg" class="img">
    </div>
    <div class="login_right">
      <div class="login_1">
        欢迎登录
      </div>
      <div class="input">
        <el-form label-width="100px">
          <el-form-item label="用户名:">
            <el-input placeholder="请输入您的用户名"></el-input>
          </el-form-item>
           <el-form-item label="密码:">
            <el-input placeholder="请输入您的密码"></el-input>
          </el-form-item>
          <div class="register">
              <span>还没有账号？</span>
              <span class="register_1" @click="newRegister()">新用户注册</span>
          </div>
           <el-form-item style="margin-left='0'">
             <el-button  type="primary" @click="tomain()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    methods: {
      newRegister(){
        this.$router.push('/register')
      },
      tomain(){
        this.$router.push('/main')
      }
    },
}
</script>

<style scoped lang='less'>
.register{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/deep/.el-button{
width: 500px;
height:50px;
font-size: 15px;
}
.register_1{
  color: #6b7bf7;
  cursor: pointer;
}
.input{
  margin-top: 30px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_1{
  margin-top: 120px;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  font-weight: 400px;
}
.img{
  width: 100%;
  height: 100%;
}
.login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .login_left{
    width: 50%;
    height: 100%;
  }
  .login_right{
    width: 50%;
    height: 100%;
  }
}
</style>