<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="个人信息">
        <div class="personalimg">
          <div class="imgleft">
            <div class="img_1">
              <img class="img_2" :src="user.avatar">
            </div>
          </div>
          <div class="imgright">
            <div class="imgright_1">
              <div class="imgright_2">
                <div>姓名:{{user.username}}</div>
                <div>呢称:{{user.nickname}}</div>
                <div>密码:{{password}} 
                  <span class="span" @click="change()">修改</span>
                </div>
              </div>
            </div>
            <div class="imgright_2">
              <div class="imgright_3">
                <div>学校:{{user.school}}</div>
                <div>性别:{{user.gender===0 ? '男':'女'}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="兑换记录">
        <div class="div">
            <div class="userColor">
                {{user.username}}
            </div>
            <div class="timeColor">
                {{user.createdAt | formatTime}}
            </div>
        </div>
      </el-tab-pane>
      <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      >
      <span>
        <el-form :model="personal_ruleForm" :rules="personal_rules" ref="personal_ruleForm" label-width="120px">
          <el-form-item label="旧密码" prop="password">
            <el-input v-model="personal_ruleForm.password"></el-input>
          </el-form-item>
           <el-form-item label="新密码" prop="new_password">
            <el-input v-model="personal_ruleForm.new_password"></el-input>
          </el-form-item>
           <el-form-item label="再次输入新密码" prop="again_password">
            <el-input v-model="personal_ruleForm.again_password" type="password"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm('personal_ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </el-tabs>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {userput} from '@/api/main/index.js'
import moment from 'moment'
export default {
    name:'Personal',
    filters: {
    formatTime(v) {
      return moment(v).format('YYYY-MM-DD HH:mm:ss');
    },
  },
    data() {
      return {
        dialogVisible: false,
        personal_ruleForm:{
          password:'',
          new_password:'',
          again_password:''
        },
        personal_rules:{
          password:[
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 3, message: '长度在 3 以上', trigger: 'blur' }
          ],
          new_password:[
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 3, message: '长度在 3 以上', trigger: 'blur' }
          ],
          again_password:[
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 3, message: '长度在 3 以上', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      change(){
        this.dialogVisible = true
      },
      confirm(formName){
          this.$refs[formName].validate((valid) => {
            //判断是否成功
            if (valid) {
              //当用户验证成功后所执行的地方
              //向服务器发请求获得数据
              userput('/user/changePassword',{
                oldPassword:this.personal_ruleForm.password,
                newPassword:this.personal_ruleForm.new_password
              }).then(res=>{
                console.log(res)
                this.$message.success('修改密码成功!')
              }).catch(err=>{
                console.log(err)
                this.$message.error('修改密码失败!')
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });      
      }
    },
    computed:{
      ...mapState({
        user:state=>{
          return state.user.user
        }
      }),
      password(){
        let password_1 = this.user.password
        let passwordStr = ''
        for(let i=0;i< password_1.length;i++){
          passwordStr += '*'
        }
        return passwordStr
      }
    }
}
</script>

<style scoped lang='less'>
.userColor{
  color:rgb(173, 170, 170);
}
.timeColor{
  color: red;
}
.div{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.span{
  color:blue;
  cursor: pointer;
}
.imgright_1{
  width: 450px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  .imgright_2{
    width: 450px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: rgb(110, 110, 110);
  }
}
.imgright_2{
  width: 450px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgright_3{
    width: 450px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: rgb(110, 110, 110);
  }
}
.imgleft{
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_1{
  width: 200px;
  height: 200px;
   border-radius: 50%;
  .img_2{
    border-radius: 50%;
    width: 200px;
    width: 200px;
  }
}
.el-tabs{
  height: 800px;
}
.personalimg{
  width: 1260px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .imgleft{
    width: 300px;
    height: 600px;
  }
  .imgright{
    width: 900px;
    height: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
}
</style>