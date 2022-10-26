<template>
  <div>
    <el-container class="home_container">
      <!-- 头部部分 -->
      <el-header>
        <div>
          <img src="../assets/未标题-1.png" alt="" class="img" />
          <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button" @click="toggleCollapse">
            |||
          </div>
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true"
            :collapse="isCollapse"
            :collapse-transition="false"
            :router="true"
            :default-active="activePath"
          >
            <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
              <template slot="title">
                <i :class="iconsObj[item.id]"></i>
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item :index="'/'+item_1.path" v-for="item_1 in item.children" :key="item_1.id" @click="saveNavState('/'+item_1.path)">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{item_1.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      menulist:[],
      isCollapse:false,
      // 保存链接地址保存
      activePath:'',
      iconsObj:{
        '125':'el-icon-s-custom',
        '103':'el-icon-s-open',
        '101':'el-icon-folder-remove',
        '102':'el-icon-message-solid',
        '145':'el-icon-share',
      }
    }
  },
  methods: {
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath)
    },  
    toggleCollapse(){
      //点击按钮切换按钮折叠与展开
      this.isCollapse = !this.isCollapse
    },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList(){
      const { data:res } = await this.$http.get('menus')
      if(res.meta.status !==200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    }
  },
  created(){
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  }
};
</script>

<style lang="less" scoped>
.toggle-button{
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: white;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  .img {
    width: 50px;
    height: 50px;
  }
}
.el-aside {
  background-color: #373d41;
}
.el-menu{
    border-right:none;
}
.el-main {
  background-color: #eaedf1;
}
.home_container {
  height: 100vh;
}
.iconfont{
  margin-right: 10px;
}
</style>