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
        <el-form label-width="100px" :model="login_ruleForm" :rules="login_rules" ref="login_ruleForm">
          <el-form-item label="用户名:" prop="name">
            <el-input placeholder="请输入您的用户名" v-model="login_ruleForm.name"></el-input>
          </el-form-item>
           <el-form-item label="密码:" prop="password">
            <el-input placeholder="请输入您的密码" v-model="login_ruleForm.password"></el-input>
          </el-form-item>
          <div class="register">
              <span>还没有账号？</span>
              <span class="register_1" @click="newRegister()">新用户注册</span>
          </div>
           <el-form-item style="margin-left='0'">
             <el-button  type="primary" @click="tomain('login_ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import loginpost from '@/api/login/index.js'
export default {
    name:'Login',
    data() {
       var validatename = (rule, value, callback) => {
        const reg = /^[\u4e00-\u9fa5a-zA-Z]{6,}$/;
        if (!reg.test(value)) {
          // * 校验失败
          callback(new Error('6位以上,中文或英文组成'));
        } else {
          // * 校验成功
          callback();
        }
      };
      return {
        login_ruleForm:{
          name:'',
          password:''
        },
       login_rules: {
          name: [
            { required: true, message: '请输入用户名有误', trigger: 'blur' },
            { validator: validatename, trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码有误', trigger: 'blur' },
            { min: 6, message: '长度在6个字符以上!', trigger: 'blur' }
          ]
          }
      }
    },
    methods: {
      newRegister(){
        this.$router.push('/register')
      },
      tomain(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {



            
            // 登录请求开始
            loginpost('/api/user/login',{
              username:this.login_ruleForm.name,
              password:this.login_ruleForm.password
            }).then(res=>{
              console.log(res)
            })
            // 登录请求结束






            //成功后路由跳转到主页面中
            this.$router.push('/main')
            this.$message.success('登录成功')
          } else {
            this.$message.error('用户登录失败，请重新登录!');
            return false;
          }
          });
        }
      }
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