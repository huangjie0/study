<template>
<div class="register_2">
    <div class="register_left">
      <img src="@/assets/img.jpg" class="img">
    </div>
    <div class="register_right">
        <div class="register_person">
            注册新用户
        </div>
        <div class="input_1">
            <el-form label-width="120px" :model="register_ruleForm" :rules="register_rules" ref="register_ruleForm">
                <el-form-item label="用户名:" prop="name">
                    <el-input v-model="register_ruleForm.name" placeholder="用户名:6位以上数字和字母组成"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <el-input v-model="register_ruleForm.password" type="password" placeholder="请输入您的密码"></el-input>
                </el-form-item>
                <el-form-item label="学校:" prop="school">
                    <el-input v-model="register_ruleForm.school" placeholder="学校"></el-input>
                </el-form-item>
                <el-form-item label="昵称:" prop="nickname">
                    <el-input v-model="register_ruleForm.nickname" placeholder="昵称"></el-input>
                </el-form-item>
                <el-form-item label="请输入年龄:" prop="age">
                    <el-input v-model.number="register_ruleForm.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="请输入性别:" prop="gender">
                    <el-select v-model="register_ruleForm.gender" placeholder="请输入性别">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <div class="register_3">
                    <span>已有账号</span>
                    <span class="register_4" @click="tologin()">去登录</span>
                </div>
                <el-form-item>
                    <el-button  type="primary" class="button_1" @click="successregister('register_ruleForm')"
                     v-loading.fullscreen.lock="fullscreenLoading">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>

</template>

<script>
import register from '@/api/register/index.js'
export default {
    name:'Register',
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
            fullscreenLoading:false,
            register_ruleForm:{
                name:'',
                password:'',
                school:'',
                nickname:'',
                age:'',
                gender:''
            },
            register_rules:{
                 name: [
                { required: true, message: '请输入用户名有误', trigger: 'blur' },
                { validator: validatename, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码有误', trigger: 'blur' },
                    { min: 6, message: '长度在6个字符以上!', trigger: 'blur' }
                ],
                school:[
                    { required: true, message: '请输入学校有误', trigger: 'blur' },
                    { min: 3, message: '长度在3个字符以上!', trigger: 'blur' }
                ],
                nickname:[
                    { required: true, message: '请输入昵称有误', trigger: 'blur' },
                    { min: 3, message: '长度在3个字符以上!', trigger: 'blur' }
                ],
                age:[
                    { required: true, message: '请输入年龄有误', trigger: 'blur' },
                ],
                gender:[
                    { required: true, message: '请选择性别', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        tologin(){
            this.$router.push('/login')
        },
        successregister(formName){
            this.fullscreenLoading = true;
            this.$refs[formName].validate((valid) => {
            if (valid) {
                register('/api/user/regist',{
                    username:this.register_ruleForm.name,
                    password:this.register_ruleForm.password,
                    school:this.register_ruleForm.school,
                    nickname:this.register_ruleForm.nickname,
                    age:this.register_ruleForm.age,
                    gender:this.register_ruleForm.gender
                }).then(res=>{
                    this.$message.success('注册成功');
                    this.$router.push('/login');
                }).catch(err=>{
                    this.$message.error('用户注册失败,请重新检查用户名是否正确!')
                }).finally(
                     setTimeout(() => {
                        this.fullscreenLoading = false;
                    }, 2000)
                )
          } else {
            this.$message.error('用户注册失败，请重新注册!');
            return false;
          }
          });
        }
    },
}
</script>

<style scoped lang='less'>
@width:100%;
/deep/.el-button--primary{
    width: 700px;
    height: 50px;
}

.button_1{
    width: 600px;
    height:50px;
    font-size: 15px;
    margin-top: 10px;
}
.register_3{
    width: @width;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .register_4{
        color: #6b7bf7;
        cursor: pointer;
    }
}
.register_person{
    margin-top: 120px;
    width: @width;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    font-weight: 400px;
}
.register_2{
    width: @width;
    height: @width;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .register_left{
    width: 50%;
    height: @width;
    }
    .register_right{
        width: 50%;
        height: @width;
    }
}
.img{
  width: @width;
  height: @width;
}
</style>