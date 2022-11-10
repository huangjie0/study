<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品参数</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 头部的警告区域 -->
      <el-alert
        title="注意：只允许为第三分类设置相关的参数！"
        type="warning"
        :closable="false"
        show-icon
      ></el-alert>
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类：</span>
          <!-- 级联选择框 -->
          <el-cascader
            v-model="value"
            :options="cateList"
            :props="{ expandTrigger: 'hover', ...cateProps }"
            @change="handleChange"
          ></el-cascader>
        </el-col>
      </el-row>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="动态参数" name="many">
          <el-button
            type="primary"
            size="mini"
            :disabled="isBtnDisable"
            @click="addDialogVisible = true"
            >添加参数</el-button
          >
          <!-- 动态参数表格 -->
          <el-table :data="manyTabData" border stripe>
            <!-- 展开行 -->
            <el-table-column type="expand"></el-table-column>
            <!-- 索引列 -->
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              label="参数名称"
              prop="attr_name"
            ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="showEditDialog(scope.row.attr_id)"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeParams(scope.row.attr_id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="only">
          <el-button
            type="primary"
            size="mini"
            :disabled="isBtnDisable"
            @click="addDialogVisible = true"
            >添加属性</el-button
          >
          <!-- 静态属性表格 -->
          <el-table :data="onlyTabData" border stripe>
            <!-- 展开行 -->
            <el-table-column type="expand"></el-table-column>
            <!-- 索引列 -->
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              label="属性名称"
              prop="attr_name"
            ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.attr_id)"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeParams(scope.row.attr_id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 添加参数对话框 -->
    <el-dialog
      :title="'添加'+titleText"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed()"
    >
      <!-- 添加参数对话框 -->
      <el-form
        :model="addForm"
        :rules="addFormrules"
        ref="addFormruleForm"
        label-width="100px"
      >
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改对话框 -->
    <el-dialog
      :title="'修改'+ titleText"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="editDialogClosed()"
    >
      <!-- 添加参数对话框 -->
      <el-form
        :model="editForm"
        :rules="editFormrules"
        ref="editFormruleForm"
        label-width="100px"
      >
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="editForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editParams">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Params",
  data() {
    return {
      //修改表单对象
      editForm:{
        attr_name:''
      },
      cateList: [],
      // 级联双向绑定的数组
      value: [],
      // 配置对象
      cateProps: {
        value: "cat_id",
        label: "cat_name",
        childern: "children",
      },
      //被激活的页签名称
      activeName: "many",
      //动态参数数据
      manyTabData: [],
      //静态属性数据
      onlyTabData: [],
      //默认弹框是关闭的
      addDialogVisible: false,
      editDialogVisible:false,
      //添加参数表单数据对象
      addForm: {
        attr_name: "",
      },
      //添加表单规则对象
      addFormrules: {
        attr_name: [
          {
            required: true,
            message: "请输入参数名称",
            trigger: "blur",
          },
        ],
      },
      // 修改表单对象
      editFormrules: {
        attr_name: [
          {
            required: true,
            message: "请输入参数名称",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.getCateList();
  },
  computed: {
    //如果按钮被禁用返回true
    isBtnDisable() {
      if (this.value.length !== 3) {
        return true;
      }
      return false;
    },
    // 当前选中的三级分类
    cateId() {
      if (this.value.length === 3) return this.value[2];
      return null;
    },
    //动态计算标题文本
    titleText() {
      if (this.activeName == "many") {
        return "动态参数";
      } else {
        return "静态属性";
      }
    },
  },
  methods:{
    async removeParams(attr_id){
      const confirmResult = await this.$confirm('此操作将永久删除该参数, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        //用户取消了
      if(confirmResult !== 'confirm') return  this.$message.info('已取消删除')
      const {data:res} = await this.$http.delete(`categories/${this.cateId}/attributes/${attr_id}`)
      if(res.meta.status !==200) return this.$message.error('删除失败！')
      this.$message.success('删除参数成功！')
      this.getparamsData()
    },
    editParams(){
      this.$refs.editFormruleForm.validate(async (valid)=>{
        if(!valid) return
        const {data:res} = await this.$http.put(`categories/${this.cateId}/attributes/${this.editForm.attr_id}`,{
          attr_name:this.addForm.attr_name,
          attr_sel:this.activeName
        })
        console.log(res)
        if(res.meta.status !== 200) return this.$message.error('修改参数失败')
        this.$message.success('修改参数成功！')
        this.getparamsData()
        this.editDialogVisible = false
      })
    },
    editDialogClosed(){
      //重置表单操作
      this.$refs.editFormruleForm.resetFields()
    },
    async showEditDialog(attr_id){
      // 查询当前参数的信息
      const {data:res} = await this.$http.get(`categories/${this.cateId}/attributes/${attr_id}`,{
        params:{
          attr_sel:this.activeName
        }
      })
      if(res.meta.status !== 200) return this.$message.error('获取参数信息失败')
      this.editForm = res.data
      this.editDialogVisible = true
    },
    addParams() {
      this.$refs.addFormruleForm.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post(
          `categories/${this.cateId}/attributes`,
          {
            attr_name: this.addForm.attr_name,
            attr_sel: this.activeName,
          }
        );
        if (res.meta.status !== 201) return this.$message.error("添加参数失败");
        this.$message.success("添加参数成功！");
        this.addDialogVisible = false;
        this.getCateList();
      });
    },
    async getCateList() {
      const { data: res } = await this.$http.get("categories");
      if (res.meta.status !== 200)
        return this.$message.error("获取商品分类失败");
      this.cateList = res.data;
    },
    //级联选中变化会触发
    handleChange() {
      this.getparamsData();
    },
    //获取参数列表数据
    async getparamsData() {
      if (this.value.length !== 3) {
        this.value = [];
        return;
      }
      //根据所选的id和当前所处的面板获取参数
      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes`,
        {
          params: {
            sel: this.activeName,
          },
        }
      );
      if (res.meta.status !== 200)
        return this.$message.error("获取参数列表失败");
      if (this.activeName == "many") {
        this.manyTabData = res.data;
      } else {
        this.onlyTabData = res.data;
      }
    },
    // tab页签点击事件的处理函数
    handleTabClick() {
      this.getparamsData();
    },
    addDialogClosed() {
      this.$refs.addFormruleForm.resetFields();
    },
  },
};
</script>

<style scoped lang="less">
/deep/ .el-form-item__label {
  font-size: 12px;
}
.cat_opt {
  margin: 15px 0;
}
</style>