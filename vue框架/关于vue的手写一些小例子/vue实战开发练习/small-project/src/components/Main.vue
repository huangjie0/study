<template>
  <div>
   <el-container class="container_1">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
    name:'Main',

}
</script>

<style scoped lang='less'>
/deep/ .el-aside{
  min-height: 845px !important;
  background-color: blueviolet;
}
</style>