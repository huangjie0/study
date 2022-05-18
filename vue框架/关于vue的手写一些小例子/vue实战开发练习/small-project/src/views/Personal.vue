<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="个人信息">个人信息</el-tab-pane>
      <el-tab-pane label="兑换记录">兑换记录</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
    name:'Personal',
}
</script>

<style scoped lang='less'>
.el-tabs{
  background-color: blueviolet;
  height: 800px;
}
</style>