<template>
  <div class="login">
      用户名: <input type="text"> <br>
      密码: <input type="password"><br>
      <button @click="login()">登录</button>
  </div>
</template>

<script>
export default {
    name:'Login',
    methods: {
        login(){
            this.$router.push('/main')
        },
    },

}
</script>

<style scoped>
    .login{
        width: 300px;
        height: 100px;
        margin: 0 auto;
    }
</style>