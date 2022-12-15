<template>
  <div>
    <van-nav-bar title="登录/注册" left-arrow @click-left="$router.back()" />
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        left-icon="phone-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        left-icon="browsing-history-o"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="mini" type="primary" round class="send-btn">发送验证码</van-button>
        </template> </van-field
      >
    </van-cell-group>
    <div class="login-btn-wrap">
        <van-button type="info" block class="login-button" @click="onlogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/user'
export default {
  name: "Login",
  methods: {
    async onlogin(){
        const res = await login(this.user)
        console.log(res)
    }
  },
  data() {
    return {
      user: {
        mobile: "",
        code: "",
      },
    };
  },
};
</script>

<style lang="less">
.send-btn{
    width: 76px;
    height: 23px;
    background-color: #ededed;
}
.van-button--primary{
        border: none;
        color:#666666;
        font-size: 11px;
    }
.login-btn-wrap{
    padding: 26px 16px;
    .van-button--info{
        border: none;
    }
    .van-button{
        background-color: #6db4fb;
        font-size: 15px;
    }
}
.van-nav-bar{
    background-color: #3296fa;
    .van-icon{
        color: white;
    }
}
.van-nav-bar__title{
    color: white;
}
</style>