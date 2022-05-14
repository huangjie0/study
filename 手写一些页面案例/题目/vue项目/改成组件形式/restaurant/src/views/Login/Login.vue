<template>
  <div class="login">
      <div class="login_1">欢迎来到xx菜馆</div>
      <div class="login_2">
            <div>用户名:</div> 
                <div><input type="text" class="input_1">
            </div> 
      </div>
       <div class="login_2">
            <div>密码:</div> 
                <div><input type="text" class="input_1">
            </div> 
      </div>
      <div class="login_2">
        <button @click="login">登录</button>
      </div>
  </div>
</template>

<script>


export default {
    name:'Login',
    data() {
        return {
            users:{
                username:'huangjie',
                password:123456
            }
        }
    },
    methods: {
        login(){
          window.localStorage.setItem('users',JSON.stringify(this.users));
          this.$router.push('/main')
        }
    },

}
</script>

<style scoped lang='less'>
.login{
    width: 400px;
    height: 150px;
    background-color: aqua;
    margin: 0 auto;
    .login_1{
        width: 400px;
        height: 40px;
        background-color: blueviolet;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
    };
    .login_2{
        width: 400px;
        height: 40px;
        background-color: bisque;
        display: flex;
        justify-content: space-around;
        align-items: center;
    };
    .input_1{
        width: 300px;
        height: 20px;
        outline: none;
        border: 0;
    }
}
</style>