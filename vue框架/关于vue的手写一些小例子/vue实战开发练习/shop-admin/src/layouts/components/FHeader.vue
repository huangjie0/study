<template>
  <div class="header">
    <span class="logo">
      <el-icon class="logo-r"><Monitor /></el-icon>
      迪沙编程
    </span>
    <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
      <Fold v-if="$store.state.asideWidth == '250px'" />
      <Expand v-else/>
    </el-icon>
    <el-tooltip effect="dark" content="刷新" placement="bottom">
      <el-icon class="icon-btn" @click="handleRefresh"
        ><RefreshRight
      /></el-icon>
    </el-tooltip>
    <div class="header-right">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <el-icon class="icon-btn" @click="toggle">
          <FullScreen v-if="!isFullscreen" />
          <Aim v-else />
        </el-icon>
      </el-tooltip>
      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            :size="50"
            :src="$store.state.user.avatar"
            class="avatar"
          />
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <FormDrawer
        ref="formDrawerRef"
        title="修改密码"
        destroyOnClose
        @submit="onSubmit"
      >
        <el-form
          :model="form"
          :rules="rules"
          ref="formRef"
          label-width="80px"
          size="small"
        >
          <el-form-item prop="oldpassword" label="旧密码">
            <el-input v-model="form.oldpassword" placeholder="请输入旧密码">
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="新密码">
            <el-input
              v-model="form.password"
              placeholder="请输入新密码"
              type="password"
              show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="repassword" label="确认密码">
            <el-input
              v-model="form.repassword"
              placeholder="请输入确认密码"
              type="password"
              show-password
            >
            </el-input>
          </el-form-item>
        </el-form>
      </FormDrawer>
    </div>
  </div>
</template>
<script setup>
import FormDrawer from "@/components/FormDrawer.vue";
import { useFullscreen } from "@vueuse/core";
import { useRepassword,useLogout } from "@/composables/useManager.js"
const { isFullscreen, toggle } = useFullscreen();
const {
    formDrawerRef,
    form,
    formRef,
    rules,
    onSubmit,
    openRePasswordForm
} = useRepassword()

const {
  handlelogout
} = useLogout()


function handleCommand(command) {
  switch (command) {
    case "logout":
      handlelogout();
      break;
    case "rePassword":
    openRePasswordForm()
      break;
  }
}
//刷新事件
function handleRefresh() {
  location.reload();
}
</script>
<style scoped>
.el-icon {
  width: 0;
  height: 0;
}
.avatar {
  margin-right: 8px;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  color: aliceblue;
}
.dropdown {
  height: 64px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
}
.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}
.icon-btn:hover {
  background-color: rgb(165, 92, 234);
}
.logo-r {
  margin-right: 10px;
}
.logo {
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 100;
}
.header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.header {
  display: flex;
  align-items: center;
  background-color: blueviolet;
  color: aliceblue;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>