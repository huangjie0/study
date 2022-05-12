<template>
<div class="login">
    <div class="login_1">登录页面</div>
    <div class="login_2">
        用户名: <input type="text" class="input_1">
    </div>
    <div class="login_3">
        密码: <input type="text" class="input_1">
    </div>
    <div class="login_4">
        <input type="button" value="登录" class="button" @click="login">
    </div>
</div>
</template>

<script>
export default {
    name:'Login',
    data() {
        return {
            obj:{
                username:'huangjie',
                password:123456
            }
        }
    },
    methods: {
        login(){
            window.localStorage.setItem('user',JSON.stringify(this.obj))
            this.$router.push('/todolist')
        }
    },
}
</script>

<style scoped>
.input_1{
    width: 300px;
    height: 30px;
    outline: none;
    border: 0;
}
.login{
 width: 600px;
 height: 300px;
 margin: 0 auto;
 background-color: aqua;
}
.login_1{
    width: 600px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
}
.login_2,.login_3,.login_4{
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
.button{
    width: 100px;
    height: 30px;
}
</style>