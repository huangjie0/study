<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input
            placeholder="请输入内容"
            class="input-with-select"
            v-model="queryInfo.query"
            clearable
            @clear="getUserList()"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList()"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addUsers">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table :data="userlist" style="width: 100%" border stripe>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色"> </el-table-column>
        <el-table-column label="状态">
          <!-- 开关 -->
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              @change="userStateChange(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="showEditDialog(scope.row.id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="deleteUserById(scope.row.id)"
            ></el-button>
            <!-- 分配角色按钮 -->
            <el-tooltip
              effect="dark"
              content="分配角色"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                size="mini"
                icon="el-icon-setting"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加用户弹出框 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <!-- 内容主体区域 -->
      <span>
        <el-form
          :model="addForm"
          :rules="addFormRules"
          ref="addFormRef"
          label-width="70px"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="useremail">
            <el-input v-model="addForm.useremail"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="usermobile">
            <el-input v-model="addForm.usermobile"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <!-- 底部区域 -->
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog 
    :visible.sync="dialogVisible_1"
    title="修改用户"
    width="50%"
    @close="editDialogClose"
    >
    <!-- 修改用户信息对话框 -->
      <el-form
        :model="editForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="70px"
      >
        <el-form-item label="用户名">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible_1 = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 修改用户信息对话框结束部分 -->
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (regEmail.test(value)) {
        //合法邮箱
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    //验证手机号的规则
    var checkMobile = (rule, value, cb) => {
      const regMobile =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (regMobile.test(value)) {
        //合法手机号
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };
    return {
      //获取用户列表参数对象
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
      userlist: [],
      total: 0,
      // 用户弹出框默认值
      dialogVisible: false,
      //用户编辑对话框默认值
      dialogVisible_1: false,
      //查询用户信息对象
      editForm: {},
      addForm: {
        username: "",
        password: "",
        useremail: "",
        usermobile: "",
      },
      //修改用户校验对象
      editFormRules:{
        email:[
          {required:true,message:'请输入用户邮箱',trigger:'blur'},
          {
            validator:checkEmail,trigger:'blur'
          }
        ],
        mobile:[
          {required:true,message:'请输入用户手机号',trigger:'blur'},
          {
            validator:checkMobile,trigger:'blur'
          }
        ]
      },
      // 表单验证规则对象
      addFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名长度在3~10个字符之间",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "用户名长度在6~15个字符之间",
            trigger: "blur",
          },
        ],
        useremail: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "用户名长度在6~20个字符之间",
            trigger: "blur",
          },
          { validator: checkEmail, trigger: "blur" },
        ],
        usermobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "用户名长度在6~15个字符之间",
            trigger: "blur",
          },
          { validator: checkMobile, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    //删除用户信息
    async deleteUserById(id){
      // 根据id删除信息
      const res = await this.$confirm('此操作将永久删除用户，是否继续', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>{
          return err
        })
        if(res !== 'confirm') {
          return this.$message.info('已经取消删除')
        }
        const {data:res_1} = await this.$http.delete('users/' + id)
        if(res_1.meta.status !==200) return this.$message.error('删除用户信息失败')
        this.$message.success('删除用户信息成功！')
        this.getUserList()
    },
    //当用户点击确定时的函数
    editUserInfo(){
      this.$refs.editFormRef.validate(async valid =>{
        if(!valid) return
        //发起信息的请求
        const {data:res }= await this.$http.put(`users/` + this.editForm.id,{
          email:this.editForm.email,
          mobile:this.editForm.mobile
        })
        if(res.meta.status !==200) return this.$message.error('更新用户信息失败')
        this.dialogVisible_1 =false
        this.getUserList()
        this.$message.success('更新用户列表成功')
      })
    },
    //修改表单重置
    editDialogClose(){
      this.$refs.editFormRef.resetFields();

    },  
    //当用户点击编辑时候的函数
    async showEditDialog(id) {
      const { data: res } = await this.$http.get(`users/${id}`);
      if (res.meta.status !== 200)
        return this.$message.error("查询用户信息失败");
      this.editForm = res.data;
      this.dialogVisible_1 = true;
    },
    //当用户点击添加用户的函数
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post(`users`, this.addForm);
        if (res.meta.status !== 201)
          return this.$message.error(`${res.meta.msg}`);
        this.$message.success("添加用户成功");
        this.dialogVisible = false;
        this.getUserList();
      });
    },
    //当用户关闭弹框时所调用的函数
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    // 当用户点击添加用户打开对话框
    addUsers() {
      this.dialogVisible = true;
    },
    async userStateChange(userinfo) {
      const { data: res } = await this.$http.put(
        `users/${userinfo.id}/state/${userinfo.mg_state}`
      );
      if (res.meta.status !== 200) {
        userinfo.mg_state = !userinfo.mg_state;
        return this.$message.error("更新用户状态失败");
      }
      this.$message.success("更新用户状态成功！");
    },
    async getUserList() {
      const { data: res } = await this.$http.get("users", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取用户列表失败");
      this.userlist = res.data.users;
      this.total = res.data.total;
    },

    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getUserList();
    },
    handleCurrentChange(newpage) {
      this.queryInfo.pagenum = newpage;
      this.getUserList();
    },
  },
};
</script>

<style>
</style>