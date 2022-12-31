<template>
  <div class="f-tag-list" :style="{ left:$store.state.asideWidth }">
    <el-tabs
    v-model="activeTab"
    type="card"
    class="demo-tabs"
    @tab-remove="removeTab"
    @tab-change="changeTab"
  >
    <el-tab-pane
      v-for="item in tabList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
      :closable="item.path !== '/'"
    ></el-tab-pane>
  </el-tabs>

    <span class="tag-btn">
      <el-dropdown @command="handleClose">
        <span class="el-dropdown-link">
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="clearOther">关闭其他</el-dropdown-item>
            <el-dropdown-item command="clearAll">全部关闭</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </div>
  <div style="height: 44px;"></div>
</template>
<script setup>
import {useTabList} from "@/composables/useTabList.js"
const {
  activeTab,
  tabList,
  changeTab,
  removeTab,
  handleClose 
} = useTabList()
</script>
<style scoped>
.f-tag-list{
    position: fixed;
    top: 64px;
    right: 0;
    height: 44px;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    z-index: 100;
    padding: 0 15px;
}
.tag-btn{
    background-color: white;
    height: 32px;
    padding: 0 9px;
    border-radius: 5px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
:deep(.el-tabs__header){
    margin-bottom: 0;
    border: 0 !important;
}
:deep(.el-tabs__nav){
    border: 0 !important;
    margin-top: 4px;
}
:deep(.el-tabs__item){
    border: 0 !important;
    background-color: white;
    margin: 0 5px;
    height: 32px;
    line-height: 32px;
    border-radius: 5px;
}
.demo-tabs{
  flex: 1;
  min-width: 100px;
}
:deep(.el-tabs__nav-prev),:deep(.el-tabs__nav-next){
  line-height: 32px;
  height: 32px;
}
:deep(.is-disabled){
  cursor: not-allowed;
  background-color: rgb(234, 234, 234);
}
</style>