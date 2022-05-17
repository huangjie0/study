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
            <el-form label-width="100px">
                <el-form-item label="用户名:">
                    <el-input placeholder="请输入您的用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input placeholder="请输入您的密码"></el-input>
                </el-form-item>
                <el-form-item label="学校:">
                    <el-input placeholder="学校"></el-input>
                </el-form-item>
                <el-form-item label="昵称:">
                    <el-input placeholder="昵称"></el-input>
                </el-form-item>
                <el-form-item label="请输入年龄:">
                    <el-input placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="请输入性别:">
                    <el-select  placeholder="请输入性别">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <div class="register_3">
                    <span>已有账号</span>
                    <span class="register_4" @click="tologin()">去登录</span>
                </div>
                <el-form-item>
                    <el-button  type="primary" class="button_1">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    name:'Register',
    methods: {
        tologin(){
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped lang='less'>
.button_1{
    width: 600px;
    height:50px;
    font-size: 15px;
    margin-top: 10px;
}
.register_3{
    width: 100%;
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
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
    font-weight: 400px;
}
.register_2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .register_left{
    width: 50%;
    height: 100%;
    }
    .register_right{
        width: 50%;
        height: 100%;
    }
}
.img{
  width: 100%;
  height: 100%;
}

</style>