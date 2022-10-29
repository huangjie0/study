<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 添加角色 -->
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- 角色列表区域 -->
      <el-table :data="rolesList" border stripe>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              v-for="(item, i) in scope.row.children"
              :key="item.id"
              :class="['bdbuttom', i == 0 ? 'bdtop' : '', 'vcenter']"
            >
              <!-- 一级权限 -->
              <el-col :span="5">
                <el-tag closable @close="handleClose(scope.row, item.id)">{{
                  item.authName
                }}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 二级权限 -->
              <el-col :span="19">
                <el-row
                  :class="[index == 0 ? '' : 'bdtop', 'vcenter']"
                  v-for="(item2, index) in item.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag
                      type="success"
                      closable
                      @close="handleClose(scope.row, item2.id)"
                      >{{ item2.authName }}</el-tag
                    >
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      closable
                      @close="handleClose(scope.row, item3.id)"
                      v-for="(item3, index) in item2.children"
                      type="warning"
                      :key="item3.id"
                      >{{ item3.authName }}</el-tag
                    >
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"
              >编辑</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="showSetRightDialog(scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 展示分配权限的对话框 -->
    <el-dialog
      title="分配权限"
      :visible.sync="dialogVisible"
      width="30%"
      @click="setDialogClose()"
    >
      <!-- 树形控件 -->
      <el-tree ref="treeRef" :data="rightsList" :props="treeProps" show-checkbox node-key="id" :default-expand-all="true" :default-checked-keys="defKeys"></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "roles",
  data() {
    return {
      rolesList: [],
      roleId:'',
      dialogVisible:false,
      rightsList:[],
      //默认勾选的节点数组
      defKeys:[],
    //树形控件绑定对象
      treeProps:{
        children:'children',
        label:'authName'
      }
    };
  },
  methods: {
    async allotRights(){
        const keys = [...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()]
        const idStr = keys.join(',')
        const {data:res} =await this.$http.post(`roles/${this.roleId}/rights`,{
            rids:idStr
        })
        if(res.meta.status !== 200) return this.$message.error('分配权限失败')
        this.$message.success('分配权限成功')
        this.getRoles()
        this.dialogVisible=false
    },
    setDialogClose(){
        this.defKeys = []
    },
    // 递归函数获取数组id默认勾选的
    getLeafKey(node,arr){
        if(!node.children){
            return arr.push(node.id)
        }
        node.children.forEach(item=>{
            this.getLeafKey(item,arr)
        })
    },
    async showSetRightDialog(role) {
        this.roleId = role.id
        // 获取所有数据
        const {data:res}= await this.$http.get('rights/tree')
        if(res.meta.status !== 200) return this.$message.error('获取权限数据失败')
        this.rightsList = res.data
        console.log(this.rightsList)
        // 递归获取三级节点id
        this.getLeafKey(role,this.defKeys)
        // 展示分配权限弹框
        this.dialogVisible=true
    },
    //删除标签的按钮
    async handleClose(i, roleId) {
      const res = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => {
        return err;
      });
      if (res !== "confirm") {
        return this.$message.info("取消删除");
      }
      const { data: res_1 } = await this.$http.delete(
        `roles/${i.id}/rights/${roleId}`
      );
      if (res_1.meta.status !== 200) return this.$message.error("删除权限失败");
      //刷新数据
      // this.getRoles()
      i.children = res_1.data;
    },
    async getRoles() {
      const { data: res } = await this.$http.get("roles");
      if (res.meta.status !== 200)
        return this.$message.error("获取角色权限失败");
      this.rolesList = res.data;
    },
  },
  created() {
    this.getRoles();
  },
};
</script>

<style scoped lang="less">
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbuttom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  // justify-content: center;
  align-items: center;
}
</style>