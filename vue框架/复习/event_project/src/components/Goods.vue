<template>
  <div>
    <!-- 导航屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            clearable
            @clear="getGoodList"
          >
            <el-button slot="append" icon="el-icon-search" @click="getGoodList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="goAddpage">添加商品</el-button>
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table :data="goodsList" border stripe >
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="商品名称" prop="goods_name"></el-table-column>
        <el-table-column label="商品价格" width="90px" prop="goods_price"></el-table-column>
        <el-table-column label="商品重量" width="70px" prop="goods_weight"></el-table-column>
        <el-table-column label="创建时间" width="140px" prop="add_time">
            <template slot-scope="scope">
                {{scope.row.add_time | dataFormat}}
            </template>
        </el-table-column>
        <el-table-column label="操作" width="130px">
            <template slot-scope="scope">
                <el-button type="primary" size="mini" icon="el-icon-edit" @click=""></el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeById(scope.row.goods_id)"></el-button>
            </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data(){
    return {
        //查询参数对象
        queryInfo:{
            query:'',
            pagenum:1,
            pagesize:10
        },
        total:0,
        goodsList:[]
    }
  },
  methods:{
        goAddpage(){
            this.$router.push('/goods/add')
        },
        async removeById(id){
        const res = await this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(res !== 'confirm') return this.$message.info('已取消删除')
        const {data:res_1} = await this.$http.delete(`goods/${id}`)
        if(res_1.meta.status !== 200) return this.$message.err('删除该商品失败')
        this.$message.success('删除该商品成功！')
        // 刷新列表
        this.getGoodList()
    },
    handleSizeChange(newpagesize){
        this.queryInfo.pagesize = newpagesize
        this.getGoodList()
    },
    handleCurrentChange(newpagenum){
        this.queryInfo.pagenum = newpagenum
        this.getGoodList()
    },
    async getGoodList(){
        const { data:res}= await this.$http.get('goods',{
            params:this.queryInfo
        })
        if(res.meta.status !==200) return this.$message.error('查询商品列表失败')
        this.$message.success('查询列表参数成功！')
        this.goodsList = res.data.goods
        this.total=res.data.total
    }
  },
  created(){
    this.getGoodList()
  }
};
</script>

<style scoped lang="less">
</style>