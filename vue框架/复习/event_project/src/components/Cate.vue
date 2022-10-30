<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="addCate">添加分类</el-button>
        </el-col>
      </el-row>
      <!-- 表格部分 -->
      <tree-table
        show-index
        index-text="#"
        :show-row-hover="false"
        border
        :data="cateList"
        :expand-type="false"
        :selection-type="false"
        :columns="columns"
        class="tree_table"
      >
        <!-- 是否有效 -->
        <template slot="isok" slot-scope="scope">
          <i
            class="el-icon-success"
            v-if="scope.row.cat_deleted === false"
            style="color: lightgreen"
          ></i>
          <i class="el-icon-error" v-else style="color: red"></i>
        </template>
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag
            type="success"
            size="mini"
            v-else-if="scope.row.cat_level === 1"
            >二级</el-tag
          >
          <el-tag type="warning" size="mini" v-else>三级</el-tag>
        </template>
        <!-- 操作 -->
        <template slot="opt" slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </tree-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加分类的弹框层 -->
    <el-dialog title="添加分类" :visible.sync="dialogVisible" width="50%" @close="addCateDialogClose">
      <!-- form表单区域 -->
      <el-form
        :model="addCateForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="分类名称:" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类:">
          <el-cascader
            v-model="value"
            :options="parentCateList"
            @change="handleChange"
            :props="{ expandTrigger: 'hover',...cascaderProps,checkStrictly:true}"
            clearable
          ></el-cascader>
        </el-form-item>
      </el-form>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="addCateConfirm">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Cate",
  data() {
    return {
    value:[],
    cascaderProps:{
        value:'cat_id',
        label:'cat_name',
        children:'children'
    },
      //父级列表
      parentCateList: [],
      // 添加分类的数组
      addCateForm: {
        cat_name: "",
        // 父级id
        cat_pid: 0,
        cat_level: 0,
      },
      //   验证规则
      rules: {
        cat_name: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
        ],
      },
      cateList: [],
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      dialogVisible: false,
      // 总数据
      total: 0,
      columns: [
        {
          label: "分类名称",
          prop: "cat_name",
        },
        {
          label: "是否有效",
          type: "template",
          template: "isok",
        },
        {
          label: "排序",
          template: "order",
          type: "template",
        },
        {
          label: "操作",
          template: "opt",
          type: "template",
        },
      ],
    };
  },
  methods: {
    addCateConfirm(){
        this.$refs.ruleForm.validate(async vaid=>{
            if(!vaid) return
            const{data:res}= await this.$http.post('categories',this.addCateForm)
            if(res.meta.status !==201) return this.$message.error('添加分类失败')
            this.$message.success('添加分类成功')
            this.getCate()
            this.dialogVisible = false
        })
    },
    addCateDialogClose(){
        this.$refs.ruleForm.resetFields()
        this.value = []
        this.addCateForm.cat_level = 0
        this.addCateForm.cat_pid = 0
    },
    handleChange(){
        if(this.value.length > 0){
            this.addCateForm.cat_pid = this.value[this.value.length-1]
            this.addCateForm.cat_level = this.value.length 
            return 
        }else {
            this.addCateForm.cat_pid = 0
            this.addCateForm.cat_level = 0
        }
    },
    async getParentCateList() {
      const { data: res } = await this.$http.get("categories", {
        params: {
          type: 2,
        },
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取父级分类失败");
      this.parentCateList = res.data;
    },
    addCate() {
      this.getParentCateList();
      this.dialogVisible = true;
    },
    handleCurrentChange(newNum) {
      this.queryInfo.pagenum = newNum;
      this.getCate();
    },
    //pagesize事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getCate();
    },
    async getCate() {
      const { data: res } = await this.$http.get("categories", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取商品分类失败");
      this.cateList = res.data.result;
      this.total = res.data.total;
    },
  },
  created() {
    this.getCate();
  },
};
</script>

<style scoped lang="less">
.tree_table {
  margin-top: 15px;
}
</style>