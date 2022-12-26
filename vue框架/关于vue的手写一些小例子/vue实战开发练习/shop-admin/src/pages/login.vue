<template>
  <el-row style="min-height: 100vh" class="login-container">
    <el-col :span="16" class="login-left">
      <div>
        <div class="welcome">欢迎光临</div>
        <div class="studying">
          此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址
        </div>
      </div>
    </el-col>
    <el-col :span="8" class="login-right">
      <h2 class="welcome-h2">欢迎回来</h2>
      <div class="account-number">
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
                <el-icon><UserFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
            <template #prefix>
                <el-icon><Lock /></el-icon>
            </template>
        </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round color="#6366f1" @click="onSubmit" :loading="loading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
import { setToken } from '@/composables/auth.js'
import {login,getinfo} from '@/api/manager.js'
import { reactive ,ref} from "vue";
import { toast } from "@/composables/util.js"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
const store = useStore()
const router = useRouter()
const form = reactive({
  username: "",
  password: "",
});

const onSubmit = () => {
  formRef.value.validate((value)=>{
    if(!value) return false
    loading.value = true
    login(form.username,form.password).then((res)=>{
        //提示用户成功
        toast("登录成功")
        //存储用户的token值和用户相关信息
        setToken(res.token)
        //获取用户相关信息
        getinfo().then(res2=>{
            store.commit("SET_USERINFO",res2)
        })
        //跳转到后台首页
        router.push("/")
    }).catch((err)=>{
        ElNotification({
            message: err.response.data.msg || "请求失败",
            type: 'error',
            duration:3000
        })
    }).finally(()=>{
        loading.value = false
    })
  })
};
const loading = ref(false)
const rules = {
    username:[
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    ],
    password:[
    { required: true, message: '密码不能为空', trigger: 'blur' },
    ]
}
const formRef = ref(null)

</script>
<style>
.el-form {
  width: 250px;
}
.el-button {
  width: 250px;
}
.line {
  height: 1px;
  width: 4rem;
  background-color: rgb(207, 207, 207);
}
.account-number {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  color: rgb(187, 187, 187);
}
.login-container {
  background-color: #6366f1;
}
.login-right {
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome {
  font-weight: bold;
  font-size: 45px;
  color: white;
  margin-bottom: 10px;
}
.studying {
  color: aliceblue;
  font-size: 14px;
}
.welcome-h2 {
  font-weight: bold;
  font-size: 30px;
}
</style>